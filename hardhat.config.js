/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: '0.8.9',
    defaulNetwork:'sepolia',
    networks:{
      hardhat:{},
      sepolia:{
        URL:'https://rpc.sepolia.org',
        accounts:[`0x${process.env.PRIVATE_KEY}`],
      }
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
