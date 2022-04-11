/** @format */

// scripts/deploy.js
const PROXY = "0xA23dD8CDed1F05cB3EAb5D509e7D88304ba8307b";
async function main() {
  const Cntrct = await ethers.getContractFactory("BoxV2");
  await upgrades.upgradeProxy(PROXY, Cntrct);
  console.log("Contract upgraded:");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
