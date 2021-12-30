require('dotenv').config();
const ethers = require('ethers');

async function main() {

  // replace argument with the contract file you want to deploy!
  const gameNumber = 4;
  const Game = await hre.ethers.getContractFactory(`Game${gameNumber}`);
  // const game = await Game.deploy(); // for games 1-3
  const game = await Game.deploy(10); // for Game4
  console.log(`Game ${gameNumber} deployed to address: `, game.address);
}

main()
 .then(() => process.exit(0))
 .catch(error => {
   console.error(error);
   process.exit(1);
 });