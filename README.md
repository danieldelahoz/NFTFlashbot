# NFTFlashbot

This repository contains a very simple demo application of Flashbots which allows arbitrary submission of a single transaction to Flashbot Miners. This could be used for many simple purposes, but in this source code, it's built to mint NFTs

# How to run

*NOTE*: THE CODE IS CURRENTLY SET-UP for Ethereum Mainnet so users can use the bot immediately. Change the Chain ID to Goerli and Relay to Goerli for testing.

Get some [Goerli](https://goerli.etherscan.io/) ETH on a wallet (you'll need a [faucet](https://faucet.goerli.mudit.blog/)). Extract that Goerli wallet's private key (in MetaMask `Account Details -> Export Private Key`), use that value below for `WALLET_PRIVATE_KEY`.

### Note:  It is EXTREMELY dangerous to deal with private keys in this manner, but bots require access to these keys to function. Be careful when using raw private keys that own mainnet ETH or other valuable assets. Keep as little value in these "hot" accounts as possible.

```shell
npm install
WALLET_PRIVATE_KEY=0x1d9af4................ npx ts-node src/index.ts
```

change the const variable of WALLET_PRIVATE_KEY at the top of index.ts to your wallet's private key. If this is not done, the transaction will not go through.

# Goerli Testing Contract Addresses:

* WasteGas: `0x957B500673A4919C9394349E6bbD1A66Dc7E5939`
* FakeArtMinter: `0x20EE855E43A7af19E407E39E5110c2C1Ee41F64D`

for testing purposes


# Packages may need to be installed for program to run, as I did not include the node_modules.



# How to fill in the transaction details for your NFT

Adjust Ether price. for example, if mint price is .08, make the last number on the equation (ETHER / 100n * 8n) to an 8. 

For example: If mint price is .04, the equation is (ETHER / 100n * 4n)
If mint price is .1 eth, the equation is (ETHER / 100n * 10n), and so on


Fill in DATA for transaction:
For this, go to the etherscan and go through the process as if you were writing the contract on there. When Metamask opens to confirm the transaction, go to the "details" tab and copy the Hex Data. The Hex Data is then pasted into the data field on the code.

For example: data '0x000000'


Fill in the "to" field on index.src with the contract address of the NFT you want to mint.
