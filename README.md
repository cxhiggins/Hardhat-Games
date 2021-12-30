# HardHat Games

This activity involves deployed predefined contracts to the Rinkeby test network and then interacting with the deployed contracts to trigger win conditions.

## Deployment

To deploy the contracts, I modified `deploy.js` by changing the `gameNumber` accordingly and then executed `npx hardhat run scripts/deploy.js --network rinkeby` in the command line.

1. First contract deployed to address [0x7EE43E708cD3d0759d4cB42F1E2247C39Ce54ab9](https://rinkeby.etherscan.io/address/0x7EE43E708cD3d0759d4cB42F1E2247C39Ce54ab9)
2. Second contract deployed to [0xcaC9E23aE488C177fF09bA5117458579965aA555](https://rinkeby.etherscan.io/address/0xcaC9E23aE488C177fF09bA5117458579965aA555)
3. Third contract deployed to [0x8EC7A06550ea99A5fF20022638C3B22807E7752B](https://rinkeby.etherscan.io/address/0x8EC7A06550ea99A5fF20022638C3B22807E7752B): had to run the script a couple of times since it ran out of gas on the first go, but on the second try received the Winner event.
4. Fourth contract deployed to [0xc0edFB7B075787411960ba7B262670fd4217F3EB](https://rinkeby.etherscan.io/address/0xc0edFB7B075787411960ba7B262670fd4217F3EB) with secret 10

## Solutions

My solutions are written in `scripts/win.js` as functions `game1Solution`, `game2Solution`, etc.