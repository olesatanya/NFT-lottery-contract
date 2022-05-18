
const fs = require('fs');
const {ethers} = require('hardhat')
async function main() {
	const TokenContract = await ethers.getContractFactory("PERCToken");
	const tokenContract = await TokenContract.deploy();


	const contract = tokenContract.address
	fs.writeFileSync(__dirname + '/./token.json', JSON.stringify({ contract }, null, '\t'))
}

main().then(() => {
}).catch((error) => {
	console.error(error);
	// process.exit(1);
});
