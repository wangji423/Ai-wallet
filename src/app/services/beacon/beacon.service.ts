import { createV0TezosProtocol, ICoinProtocolAdapter, ProtocolService } from '@airgap/angular-core'
import {
  AppMetadata,
  BeaconErrorType,
  BeaconMessageType,
  BeaconRequestOutputMessage,
  BeaconResponseInputMessage,
  BEACON_VERSION,
  getSenderId,
  Network,
  NetworkType as BeaconNetworkType,
  OperationRequest,
  P2PPairingRequest,
  StorageKey,
  WalletClient
} from '@airgap/beacon-sdk'
import { ICoinProtocol, MainProtocolSymbols } from '@airgap/coinlib-core'
import { UnsignedTransaction } from '@airgap/module-kit'
import { TezosProtocol, TezosProtocolNetwork } from '@airgap/tezos'
import { TEZOS_GHOSTNET_PROTOCOL_NETWORK, TEZOS_MAINNET_PROTOCOL_NETWORK } from '@airgap/tezos/v1/protocol/TezosProtocol'
import { Injectable } from '@angular/core'
import { LoadingController, ModalController, ToastController } from '@ionic/angular'

import { BeaconRequestPage } from '../../pages/beacon-request/beacon-request.page'
import { ErrorPage } from '../../pages/error/error.page'
import { WalletStorageKey, WalletStorageService } from '../storage/storage'

@Injectable({
  providedIn: 'root'
})
export class BeaconService {
  public client: WalletClient

  public loader: HTMLIonLoadingElement | undefined
  public toast: HTMLIonToastElement | undefined

  public constructor(
    private readonly modalController: ModalController,
    private readonly loadingController: LoadingController,
    private readonly toastController: ToastController,
    private readonly storage: WalletStorageService,
    private readonly protocolService: ProtocolService
  ) {
    this.client = this.getClient()
    this.init()
  }

  public async reset(): Promise<void> {
    await this.client.destroy()
    this.client = this.getClient()
    this.init()
  }

  public async init(): Promise<void> {
    await this.client.init()

    return this.client.connect(async (message) => {
      this.hideToast()
      if (message.type === BeaconMessageType.PermissionRequest && !(await this.isNetworkSupported(message.network))) {
        return this.sendNetworkNotSupportedError(message)
      } else {
        await this.presentModal(message)
      }
    })
  }

  public async presentModal(request: BeaconRequestOutputMessage) {
    const modal = await this.modalController.create({
      component: BeaconRequestPage,
      componentProps: {
        request,
        client: this.client,
        beaconService: this
      }
    })

    return modal.present()
  }

  public async addVaultRequest(
    request: BeaconRequestOutputMessage | { transaction: UnsignedTransaction; id: string },
    protocol: ICoinProtocol
  ): Promise<void> {
    const network = (request as OperationRequest).network
    if (network) {
      const isProtocolAvailable = await this.protocolService.isProtocolAvailable(protocol.identifier, protocol.options.network.identifier)
      if (!isProtocolAvailable) {
        await this.protocolService.addActiveProtocols(protocol)
      }
    }
    this.storage.setCache(WalletStorageKey.PENDING_REQUEST, [request, protocol.identifier, protocol.options.network.identifier])
  }

  public async getVaultRequest(): Promise<[BeaconRequestOutputMessage, ICoinProtocol] | []> {
    const cachedRequest: [BeaconRequestOutputMessage, MainProtocolSymbols, string] = await this.storage.getCache(
      WalletStorageKey.PENDING_REQUEST
    )
    const result: [BeaconRequestOutputMessage, ICoinProtocol] = [undefined, undefined]
    if (cachedRequest) {
      if (cachedRequest[0]) {
        result[0] = cachedRequest[0]
      }
      if (cachedRequest[1]) {
        const protocol = await this.protocolService.getProtocol(cachedRequest[1], cachedRequest[2])
        result[1] = protocol
      }
    }
    return result ? result : []
  }

  public async clearVaultRequest(): Promise<void> {
    await this.storage.setCache(WalletStorageKey.PENDING_REQUEST, [])
  }

  public async respond(response: BeaconResponseInputMessage, request: BeaconRequestOutputMessage): Promise<void> {
    await this.clearVaultRequest()
    await this.client.respond(response).catch((err) => console.error(err))
    await this.showToast('response-sent', request.appMetadata)
  }

  public async showLoader(): Promise<void> {
    if (this.loader) {
      return
    }

    this.loader = await this.loadingController.create({
      message: 'Connecting to Beacon Network...',
      duration: 10000
    })
    await this.loader.present()
  }

  public async hideLoader(): Promise<void> {
    if (!this.loader) {
      return
    }
    await this.loader.dismiss()
    this.loader = undefined
  }

  public async showToast(type: 'connected' | 'response-sent', appMetadata?: AppMetadata): Promise<void> {
    if (this.toast) {
      return
    }

    const dAppName = appMetadata && appMetadata.name ? appMetadata.name : 'the dApp'

    const message =
      type === 'connected' ? `Beacon connection successful. Waiting for request from ${dAppName}...` : `Response sent to ${dAppName}.`

    this.toast = await this.toastController.create({
      message,
      position: 'top',
      duration: 5000,
      buttons: [
        {
          text: 'Close',
          role: 'cancel'
        }
      ]
    })
    await this.toast.present()
  }

  public async hideToast(): Promise<void> {
    if (!this.toast) {
      return
    }
    await this.toast.dismiss()
    this.toast = undefined
  }

  public async addPeer(peer: P2PPairingRequest): Promise<void> {
    await this.showLoader()
    await this.client.addPeer(peer)
    await this.hideLoader()
    await this.showToast('connected')
  }

  public async getPeers(): Promise<P2PPairingRequest[]> {
    return this.client.getPeers() as any // TODO: Fix types
  }

  public async removePeer(peer: P2PPairingRequest): Promise<void> {
    await this.client.removePeer(peer as any, true) // TODO: Fix types
  }

  public async removeAllPeers(): Promise<void> {
    await this.client.removeAllPeers(true)
  }

  public async displayErrorPage(error: Error & { data?: unknown }): Promise<void> {
    let message = error.message
    if (message === 'TEZOS(NETWORK)') {
      message = 'The simulation of your transaction failed. Please make sure all the values in your transaction are valid.'
    }
    const data = error.data ? error.data : error.stack
    // TODO: Parse contents and show info (eg. failwith)
    // if (error.data) {
    //   if ((error.data as any).contents) {
    //     data = {}
    //   }
    // }
    const modal = await this.modalController.create({
      component: ErrorPage,
      componentProps: {
        title: error.name ?? 'Error',
        message,
        data
      }
    })

    return modal.present()
  }

  private async isNetworkSupported(network?: Network): Promise<boolean> {
    return (
      network &&
      network.type &&
      (network.type === BeaconNetworkType.MAINNET ||
        network.type === BeaconNetworkType.GHOSTNET ||
        network.type === BeaconNetworkType.CUSTOM)
    )
  }

  public async sendAbortedError(request: BeaconRequestOutputMessage): Promise<void> {
    const responseInput = {
      id: request.id,
      type: BeaconMessageType.Error,
      errorType: BeaconErrorType.ABORTED_ERROR
    } as any // TODO: Fix type

    const response: BeaconResponseInputMessage = {
      senderId: await getSenderId(await this.client.beaconId), // TODO: Remove senderId and version from input message
      version: BEACON_VERSION,
      ...responseInput
    }
    await this.respond(response, request)
  }

  public async sendNetworkNotSupportedError(request: BeaconRequestOutputMessage): Promise<void> {
    const responseInput = {
      id: request.id,
      type: BeaconMessageType.Error,
      errorType: BeaconErrorType.NETWORK_NOT_SUPPORTED
    } as any // TODO: Fix type

    const response: BeaconResponseInputMessage = {
      senderId: await getSenderId(await this.client.beaconId), // TODO: Remove senderId and version from input message
      version: BEACON_VERSION,
      ...responseInput
    }
    await this.respond(response, request)
    await this.displayErrorPage(new Error('Network not supported!'))
  }

  public async sendAccountNotFound(request: BeaconRequestOutputMessage): Promise<void> {
    const responseInput = {
      id: request.id,
      type: BeaconMessageType.Error,
      errorType: BeaconErrorType.NO_ADDRESS_ERROR
    } as any // TODO: Fix type

    const response: BeaconResponseInputMessage = {
      senderId: await getSenderId(await this.client.beaconId), // TODO: Remove senderId and version from input message
      version: BEACON_VERSION,
      ...responseInput
    }
    await this.respond(response, request)
    await this.displayErrorPage(new Error('Account not found'))
  }

  public async sendInvalidTransaction(request: BeaconRequestOutputMessage, error: any /* ErrorWithData */): Promise<void> {
    const responseInput = {
      id: request.id,
      type: BeaconMessageType.Error,
      errorType: BeaconErrorType.TRANSACTION_INVALID_ERROR,
      errorData: error.data
    } as any // TODO: Fix type

    const response: BeaconResponseInputMessage = {
      senderId: await getSenderId(await this.client.beaconId), // TODO: Remove senderId and version from input message
      version: BEACON_VERSION,
      ...responseInput
    }

    let errorMessage = ''
    try {
      errorMessage =
        error.data && Array.isArray(error.data)
          ? `The contract returned the following error: ${error.data.find((f) => f && f.with && f.with.string).with.string}`
          : error.message
    } catch {}

    console.error('error.message', errorMessage)

    await this.respond(response, request)
    await this.displayErrorPage({
      title: error.title,
      message: errorMessage,
      data: error.data ? error.data : error.stack
    } as any)
  }

  public async getProtocolBasedOnBeaconNetwork(network: Network): Promise<ICoinProtocolAdapter<TezosProtocol>> {
    const configs: {
      [key in Exclude<
        BeaconNetworkType,
        | BeaconNetworkType.DELPHINET
        | BeaconNetworkType.EDONET
        | BeaconNetworkType.FLORENCENET
        | BeaconNetworkType.GRANADANET
        | BeaconNetworkType.HANGZHOUNET
        | BeaconNetworkType.JAKARTANET
        | BeaconNetworkType.ITHACANET
        | BeaconNetworkType.KATHMANDUNET
        | BeaconNetworkType.MONDAYNET
        | BeaconNetworkType.DAILYNET
      >]: TezosProtocolNetwork
    } = {
      [BeaconNetworkType.MAINNET]: TEZOS_MAINNET_PROTOCOL_NETWORK,
      [BeaconNetworkType.GHOSTNET]: {
        ...TEZOS_GHOSTNET_PROTOCOL_NETWORK,
        name: network.name || TEZOS_GHOSTNET_PROTOCOL_NETWORK.name,
        rpcUrl: network.rpcUrl || TEZOS_GHOSTNET_PROTOCOL_NETWORK.rpcUrl
      },
      [BeaconNetworkType.CUSTOM]: {
        name: network.name || 'Custom Network',
        type: 'custom',
        rpcUrl: network.rpcUrl || '',
        network: undefined,
        blockExplorerUrl: '',
        blockExplorerType: 'tzkt',
        indexerApi: '',
        indexerType: 'tzkt'
      }
    }

    return createV0TezosProtocol({ network: configs[network.type] })
  }

  public getResponseByRequestType(requestType: BeaconMessageType) {
    const map: Map<BeaconMessageType, BeaconMessageType> = new Map()
    map.set(BeaconMessageType.BroadcastRequest, BeaconMessageType.BroadcastResponse)
    map.set(BeaconMessageType.OperationRequest, BeaconMessageType.OperationResponse)
    map.set(BeaconMessageType.PermissionRequest, BeaconMessageType.PermissionResponse)
    map.set(BeaconMessageType.SignPayloadRequest, BeaconMessageType.SignPayloadResponse)

    return map.get(requestType)
  }

  public async getConnectedServer(): Promise<string> {
    return (<any>this.client).storage.get(StorageKey.MATRIX_SELECTED_NODE)
  }

  private getClient(): WalletClient {
    return new WalletClient({ name: 'AirGap Wallet' })
  }
}
