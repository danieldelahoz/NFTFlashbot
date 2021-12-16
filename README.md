# NFTFlashbot

This repository contains a very simple demo application of Flashbots which allows arbitrary submission of a single transaction to Flashbot Miners. This could be used for many simple purposes, but in this source code, it's built to mint NFTs

# How to run

Get some [Goerli](https://goerli.etherscan.io/) ETH on a wallet (you'll need a [faucet](https://faucet.goerli.mudit.blog/)). Extract that Goerli wallet's private key (in MetaMask `Account Details -> Export Private Key`), use that value below for `WALLET_PRIVATE_KEY`.

### Note:  It is EXTREMELY dangerous to deal with private keys in this manner, but bots require access to these keys to function. Be careful when using raw private keys that own mainnet ETH or other valuable assets. Keep as little value in these "hot" accounts as possible.

```shell
npm install
WALLET_PRIVATE_KEY=0x1d9af4................ npx ts-node src/index.ts
```

# Goerli Contract Addresses

* WasteGas: `0x957B500673A4919C9394349E6bbD1A66Dc7E5939`
* FakeArtMinter: `0x20EE855E43A7af19E407E39E5110c2C1Ee41F64D`

for testing purposes


*note*: the source code may be currently set-up for Ethereum. You NEED to change it to a testnet if you want to Test the flashbot, preferably Goerli.
