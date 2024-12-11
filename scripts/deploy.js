const hre = require('hardhat')

async function main() {

    const Greeter = await hre.ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello, Hardhat!");
    await greeter.waitForDeployment();

    console.group("Greater deployed to : ", await greeter.getAddress())

}

main().then(() => process.exit(0))
    .catch((e) => {
        console.error(e);
        process.exit(1)
    })