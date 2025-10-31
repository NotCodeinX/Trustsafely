const hre = require("hardhat");

async function main() {
  const token = process.env.TOKEN_ADDRESS;
  const timelock = process.env.TIMELOCK_ADDRESS;
  const governor = process.env.GOVERNOR_ADDRESS;
  if (!token || !timelock || !governor) {
    throw new Error(
      "Set TOKEN_ADDRESS, TIMELOCK_ADDRESS, GOVERNOR_ADDRESS in env"
    );
  }

  const tokenName = process.env.TOKEN_NAME || "SafeTrust Governance Token";
  const tokenSymbol = process.env.TOKEN_SYMBOL || "STGT";
  const decimals = 18n;
  const initialSupply = process.env.INITIAL_SUPPLY || "1000000000";
  const initialSupplyWei = (BigInt(initialSupply) * 10n ** decimals).toString();

  const votingDelay = (process.env.VOTING_DELAY || "1").toString();
  const votingPeriod = (process.env.VOTING_PERIOD || "45818").toString();
  const proposalThreshold = (
    BigInt(process.env.PROPOSAL_THRESHOLD || "1000") *
    10n ** decimals
  ).toString();
  const quorumFraction = (process.env.QUORUM_FRACTION || "4").toString();
  const timelockDelay = (process.env.TIMELOCK_DELAY || "86400").toString();
  const guardian = process.env.GUARDIAN_ADDRESS;

  // Verify GovernanceToken
  console.log("Verifying GovernanceToken...");
  await hre.run("verify:verify", {
    address: token,
    constructorArguments: [tokenName, tokenSymbol, initialSupplyWei],
  });

  // Verify TreasuryTimelock
  console.log("Verifying TreasuryTimelock...");
  await hre.run("verify:verify", {
    address: timelock,
    constructorArguments: [
      timelockDelay,
      [],
      [hre.ethers.ZeroAddress],
      (await hre.ethers.getSigners())[0].address,
    ],
    contract: "contracts/TreasuryTimelock.sol:TreasuryTimelock",
  });

  // Verify TreasuryGovernor
  console.log("Verifying TreasuryGovernor...");
  await hre.run("verify:verify", {
    address: governor,
    constructorArguments: [
      token,
      timelock,
      votingDelay,
      votingPeriod,
      proposalThreshold,
      quorumFraction,
      guardian || (await hre.ethers.getSigners())[0].address,
    ],
  });

  console.log("Verification submitted.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
