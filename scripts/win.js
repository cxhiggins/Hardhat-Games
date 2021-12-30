async function game1Solution() {
  const game = await hre.ethers.getContractAt("Game1", "0x7EE43E708cD3d0759d4cB42F1E2247C39Ce54ab9");

  const tx = await game.win();
  const receipt = await tx.wait();

  console.log(receipt);
}

async function game2Solution() {
  const game = await hre.ethers.getContractAt("Game2", "0xcaC9E23aE488C177fF09bA5117458579965aA555");

  const tx = await game.win(56);
  const receipt = await tx.wait();

  console.log(receipt);
}

async function game3Solution() {
  const game = await hre.ethers.getContractAt("Game3", "0x8EC7A06550ea99A5fF20022638C3B22807E7752B");

  let tx;
  for (let i = 0; i < 3; i++) {
    tx = await game.win({
      value: ethers.utils.parseUnits("1", "gwei"),
    });
  }

  const receipt = await tx.wait();
  console.log(receipt);
}

async function game4Solution() {
  const game = await hre.ethers.getContractAt("Game4", "0xc0edFB7B075787411960ba7B262670fd4217F3EB");

  const tx = await game.win(10);
  const receipt = await tx.wait();

  console.log(receipt);
}

async function main() {
  await game4Solution();
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
