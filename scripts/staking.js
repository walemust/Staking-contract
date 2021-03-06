// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
const { ethers } = require("hardhat");
// const BoredApeNFTHolder = "0x4548d498460599286ce29baf9e6b775c19385227";
// const BoredApeTokenAddress = "0x0ed64d01D0B4B655E410EF1441dD677B695639E7";

async function main() {
  const stakingContract = await hre.ethers.getContractFactory("StakeContract");
  const staking = await stakingContract.deploy();
  await staking.deployed();
  console.log("Contract Address", staking.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
