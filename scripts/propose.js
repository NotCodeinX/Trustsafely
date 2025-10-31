const { ethers } = require("hardhat");

// Minimal example: propose a no-op or target a known contract call
async function main() {
  const governorAddress = process.env.GOVERNOR_ADDRESS;
  if (!governorAddress) throw new Error("Set GOVERNOR_ADDRESS in env");

  const Governor = await ethers.getContractAt(
    "TreasuryGovernor",
    governorAddress
  );

  // Example proposal: no-op call to governor itself (relay pattern)
  const targets = [governorAddress];
  const values = [0];
  const calldatas = ["0x"]; // empty calldata
  const description = "Example proposal: no-op for testing";

  const tx = await Governor.propose(targets, values, calldatas, description);
  const receipt = await tx.wait();

  console.log("Proposal submitted. Tx:", receipt.hash);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
