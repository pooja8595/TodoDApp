// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {


  const TodoListDApp = await hre.ethers.getContractFactory("TodoListDApp");
  
  const todoListDApp = await TodoListDApp.deploy();

  await todoListDApp.deployed();

  console.warn(todoListDApp);

  console.log(
    `Lock with 1 ETH and deployed to ${todoListDApp.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});