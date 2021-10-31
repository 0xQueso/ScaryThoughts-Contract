const main = async () => {
    const nftContractFactory = await hre.ethers.getContractFactory('ScaryThoughts');
    const nftContract = await nftContractFactory.deploy();
    await nftContract.deployed();
    console.log("Contract deployed to:", nftContract.address);

    // let txn = await nftContract.makeAnEpicNFT({value: 0.0001 * 10**18});
    // await txn.wait()
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();