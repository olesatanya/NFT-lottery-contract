
const fs = require('fs');
const {ethers} = require('hardhat')
async function main() {
	const TokenContract = await ethers.getContractFactory("Lottery");
	const tokenContract = await TokenContract.deploy("0xb5e63299EE2c9DabCd1Cf4c75497DfA83642CD0B", "0xE71E33e78C5d4764549123Ec4B770eF66FbD2398", 0, 0);


	const contract = tokenContract.address
	fs.writeFileSync(__dirname + '/./token.json', JSON.stringify({ contract }, null, '\t'))
}

main().then(() => {
}).catch((error) => {
	console.error(error);
	// process.exit(1);
});
