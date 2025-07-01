const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Hardhat Test Accounts", function () {
    it("Should fetch account balance", async function () {
        const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");

        // Use any test account from Hardhat node
        const wallet = new ethers.Wallet("0xYOUR_PRIVATE_KEY_HERE", provider);
        const balance = await provider.getBalance(wallet.address);

        console.log(`Account: ${wallet.address}`);
        console.log(`Balance: ${ethers.formatEther(balance)} ETH`);

        expect(balance).to.be.above(0);
    });
});
