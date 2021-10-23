require('dotenv').config()
const HDWalletProvider = require('@truffle/hdwallet-provider')
const privateKeys = process.env.PRIVATE_KEYS

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1', // Localhost (default: none)
      port: 7545, // Standard Ethereum port (default: none)
      network_id: '*' // Any network (default: none)
    },
    ropsten: {
      provider: () =>
        new HDWalletProvider(
          privateKeys,
          `https://ropsten.infura.io/v3/${process.env.INFURA_PROJECT_ID}`
        ),
      network_id: 3, // Ropsten's id
      gas: 5500000 // Ropsten has a lower block limit than mainnet
    }
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis',

  // Configure your compilers
  compilers: {
    solc: {
      settings: {
        // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }
  }
}
