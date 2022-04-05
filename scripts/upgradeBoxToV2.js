// scripts/deploy.js
const PROXY = "0x65eb26fe3b30a3119b3a91e38289e426f23daff3";
async function main() {
    const Cntrct = await ethers.getContractFactory("BoxV2");
    await upgrades.upgradeProxy(PROXY,Cntrct);
    console.log("Contract upgraded:");
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });