import { ICoinSubProtocolAdapter, UIResource } from '@airgap/angular-core'
import { TezosFAProtocol, TezosProtocolNetwork } from '@airgap/tezos'

export enum TokenInterface {
  FA1p2 = 'TZIP-007',
  FA2 = 'TZIP-012'
}

export interface TokenDetails {
  id: number
  name: string
}

export interface TokenDetailsInput {
  address: string
  networkIdentifier: string
  tokenInterface?: TokenInterface
  tokenId?: number
}

export interface TezosFAFormState {
  tokenInterface: UIResource<TokenInterface>
  tokenId: UIResource<number>

  tokenInterfaces: TokenInterface[]
  tokens: TokenDetails[]
  networks: TezosProtocolNetwork[]

  protocol: UIResource<ICoinSubProtocolAdapter<TezosFAProtocol>>

  errorDescription: string | undefined
}

// error

export enum TezosFAFormErrorType {
  CONTRACT_NOT_FOUND = 'contract-not-found',
  INTERFACE_UNKNOWN = 'interface-unknown',
  TOKEN_METADATA_MISSING = 'token-metadata-missing',
  TOKEN_VAGUE = 'token-vague',
  UNKNOWN = 'unknown'
}

interface TezosFAFormBaseError<T extends TezosFAFormErrorType> {
  type: T
}

export type ContractNotFoundError = TezosFAFormBaseError<TezosFAFormErrorType.CONTRACT_NOT_FOUND>
export interface InterfaceUnknownError extends TezosFAFormBaseError<TezosFAFormErrorType.INTERFACE_UNKNOWN> {
  tokenInterfaces: TokenInterface[]
}
export type TokenMetadataMissingError = TezosFAFormBaseError<TezosFAFormErrorType.TOKEN_METADATA_MISSING>
export interface TokenVagueError extends TezosFAFormBaseError<TezosFAFormErrorType.TOKEN_VAGUE> {
  tokens: TokenDetails[]
}
export interface UnknownError extends TezosFAFormBaseError<TezosFAFormErrorType.UNKNOWN> {
  error?: any
}

export type TezosFAFormError = ContractNotFoundError | InterfaceUnknownError | TokenMetadataMissingError | TokenVagueError | UnknownError
