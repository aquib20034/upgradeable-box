// scripts/deploy.js
async function main() {
    const Cntrct = await ethers.getContractFactory("Box");
    console.log("Deploying Contract...");
    const cntrct = await upgrades.deployProxy(Cntrct, [], { initializer: 'initialize' });
    await cntrct.deployed();
    console.log("Contract deployed to:", cntrct.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });