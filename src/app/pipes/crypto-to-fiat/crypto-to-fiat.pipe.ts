import { ProtocolService } from '@airgap/angular-core'
import { Pipe, PipeTransform } from '@angular/core'
import { ICoinProtocol, ProtocolSymbols } from '@airgap/coinlib-core'
import { BigNumber } from 'bignumber.js'

@Pipe({
  name: 'cryptoToFiat'
})
export class CryptoToFiatPipe implements PipeTransform {
  public constructor(private readonly protocolService: ProtocolService) {}

  public async transform(value: BigNumber, args: { protocolIdentifier: ProtocolSymbols; currentMarketPrice: BigNumber }): Promise<string> {
    if (
      !args ||
      !args.currentMarketPrice ||
      !BigNumber.isBigNumber(args.currentMarketPrice) ||
      isNaN(args.currentMarketPrice.toNumber()) ||
      !args.protocolIdentifier ||
      !value ||
      !BigNumber.isBigNumber(value) ||
      isNaN(value.toNumber())
    ) {
      /* console.warn(
        `CryptoToFiatPipe: necessary properties missing!\n` +
          `Market Price: ${args.currentMarketPrice}\n` +
          `Protocol: ${args.protocolIdentifier}\n` +
          `Value: ${value}`
      ) */
      return ''
    }

    let protocol: ICoinProtocol

    try {
      protocol = await this.protocolService.getProtocol(args.protocolIdentifier)
    } catch (e) {
      return ''
    }

    const fiatValue = args.currentMarketPrice.multipliedBy(value.shiftedBy(-1 * protocol.decimals))

    return fiatValue.toFixed()
  }
}
