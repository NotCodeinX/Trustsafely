const { ethers } = require("hardhat");

async function main() {
  const tokenAddress = process.env.TOKEN_ADDRESS;
  const delegateTo = process.env.DELEGATE_TO; // defaults to deployer
  if (!tokenAddress) throw new Error("Set TOKEN_ADDRESS in env");

  const [signer] = await ethers.getSigners();
  const to = delegateTo || signer.address;

  const token = await ethers.getContractAt("GovernanceToken", tokenAddress);

  console.log("Delegating votes from:", signer.address, "to:", to);
  const tx = await token.delegate(to);
  const receipt = await tx.wait();
  console.log("Delegated. Tx:", receipt.hash);

  const votes = await token.getVotes(to);
  console.log("Current votes for", to, ":", votes.toString());
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
