const main = async () => {
    const nftContractFactory = await hre.ethers.getContractFactory('ScaryThoughts');
    const nftContract = await nftContractFactory.deploy();
    await nftContract.deployed();
    const accounts = await hre.ethers.getSigners();
    console.log("Contract deployed to:", nftContract.address);

    // let txn = await nftContract.pickRandomFirstWord(0);
    // console.log(txn, 'here');
    //
    //  txn = await nftContract.pickRandomSecondWord(0);
    // console.log(txn, 'here');
    //
    //  txn = await nftContract.pickRandomThirdWord(0);
    // console.log(txn, 'here');

    await nftContract.connect(accounts[1].address);
    let txn = await nftContract.makeAnEpicNFT({value: 0.0069 * 10**18});
    await txn.wait()
    txn = await nftContract.makeAnEpicNFT({value: 0.0069 * 10**18});
    await txn.wait()

    console.log(parseInt(await hre.ethers.provider.getBalance(accounts[0].address)))
    console.log(parseInt(await hre.ethers.provider.getBalance(nftContract.address)))
    console.log(await nftContract.owner())

    txn = await nftContract.withdraw()
    await txn.wait()
    console.log(parseInt(await hre.ethers.provider.getBalance(accounts[0].address)))
    console.log(parseInt(await hre.ethers.provider.getBalance(nftContract.address)))
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