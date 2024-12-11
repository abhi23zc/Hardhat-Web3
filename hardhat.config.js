require("@nomicfoundation/hardhat-toolbox");

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();
  // console.log(await hre.ethers.provider.getNetwork())

  //   for (const account of accounts) {
  //     const address = await account.getAddress();
  //     const balance = await hre.ethers.provider.getBalance(address);
  //     console.log(address + ":" + balance.toString());
  //   }
});

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  // defaultNetwork: "sepolia",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},

    sepolia: {
      url: "https://sepolia.infura.io/v3/1ed029ecb6874544b43e3d32b113800d",
      accounts: ["224fb590f003e111798b8db9ab4947fe49b34889f9a7c6f4b36d22cad706dc14"]
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
};


