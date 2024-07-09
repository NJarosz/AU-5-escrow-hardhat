require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();

const { REACT_APP_API_URL, REACT_APP_PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.17",
  paths: {
    artifacts: "./app/src/artifacts",
  },
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${REACT_APP_API_URL}`,
      accounts: [`${REACT_APP_PRIVATE_KEY}`]
    }
  }
};