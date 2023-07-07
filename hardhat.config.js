require("@nomicfoundation/hardhat-ethers");
require("hardhat-deploy");
require("solidity-coverage");
require("hardhat-gas-reporter");
require("hardhat-contract-sizer");
require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

const PRIVATE_KEY= process.env.PRIVATE_KEY;
const SEPOLIA_RPC_URL= process.env.SEPOLIA_RPC_URL;
const COINMARKETCAP_API_KEY= process.env.COINMARKETCAP_API_KEY;
const ETHERSCAN_API_KEY= process.env.ETHERSCAN_API_KEY;

module.exports = {
  defaultNetwork: "hardhat",
  networks:{
    hardhat:{
      chainId: 31337,
      blockConfirmations: 1,
    },
    sepolia:{
      chainId: 11155111,
      blockConfirmations: 6,
      accounts: [PRIVATE_KEY],
      url: SEPOLIA_RPC_URL,
    },
  },
  gasReporter:{
    enabled:false,
    currency:"USD",
    outputFile:"gas-report.txt",
    noColors: true,
  },
  solidity: "0.8.8",
  namedAccounts:{
    deployer:{
      default: 0,
    },
    player:{
      default: 1,
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  }
};
