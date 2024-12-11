const { expect, assert } = require('chai');
const { ethers } = require('hardhat');

describe('Greeter', function () {

    let data;

    beforeEach(async () => {
        const Greeter = await ethers.getContractFactory('Greeter');
        const greeter = await Greeter.deploy('Hello, Hardhat!');
        await greeter.waitForDeployment()
        data = greeter;
    })


    it("Should return the new greeting once it's changed", async function () {

        // expect(await data.greet()).to.equal('Hello, Hardhat!');
        assert.equal(await data.greet(), "Hello, Hardhat!");


    });

    it("should assign new values to greeting variables", async function () {

        const tx = await data.setGreeting('Learning Web3');
        await tx.wait();
        expect(await data.greet()).to.equal('Learning Web3');

    })
});
