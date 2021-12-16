import {errors, ethers, providers, Wallet} from "ethers";
import { FlashbotsBundleProvider } from "@flashbots/ethers-provider-bundle";
import {ifError} from "assert";

const CHAIN_ID = 1;
const provider = new providers.InfuraProvider(CHAIN_ID)
process.env.WALLET_PRIVATE_KEY = '' //fill in with wallet privatekey

const FLASHBOTS_ENDPOINT = 'https://rpc.flashbots.net/';

if (process.env.WALLET_PRIVATE_KEY === undefined) {
  console.error("Please provide WALLET_PRIVATE_KEY env")
  process.exit(1)
}
const wallet = new Wallet(process.env.WALLET_PRIVATE_KEY, provider)

// ethers.js can use Bignumber.js class OR the JavaScript-native bigint. I changed this to bigint as it is MUCH easier to deal with
const GWEI = 10n ** 9n
const ETHER = 10n ** 18n

async function main() {
  const flashbotsProvider = await FlashbotsBundleProvider.create(provider, Wallet.createRandom(), FLASHBOTS_ENDPOINT)
  provider.on('block', async (blockNumber) => {
    console.log(blockNumber)
    const bundleSubmitResponse = await flashbotsProvider.sendBundle(
      [
        {
          transaction: {
            chainId: CHAIN_ID,
            type: 2,
            value: ETHER / 100n * 9n,
            data: '',
            maxFeePerGas: GWEI * 3n,
            maxPriorityFeePerGas: GWEI * 2n,
            to: ''

          },
          signer: wallet

        }

      ], blockNumber + 1
    )
    // By exiting this function (via return) when the type is detected as a "RelayResponseError", TypeScript recognizes bundleSubmitResponse must be a success type object (FlashbotsTransactionResponse) after the if block.
    if ('error' in bundleSubmitResponse) {
      console.warn(bundleSubmitResponse.error.message)
      return
    }

    console.log(await bundleSubmitResponse.simulate())
  })
}

main();