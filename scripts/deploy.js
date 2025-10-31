const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deployer:", deployer.address);
  console.log("Network:", (await deployer.provider.getNetwork()).chainId);

  // Parameters (adjust via env)
  const tokenName = process.env.TOKEN_NAME || "SafeTrust Governance Token";
  const tokenSymbol = process.env.TOKEN_SYMBOL || "STGT";
  const decimals = 18n;
  const initialSupply = process.env.INITIAL_SUPPLY || "1000000000"; // 1B
  const initialSupplyWei = BigInt(initialSupply) * 10n ** decimals;

  const votingDelay = BigInt(process.env.VOTING_DELAY || "1"); // blocks
  const votingPeriod = BigInt(process.env.VOTING_PERIOD || "45818"); // ~1 week (13s blocks)
  const proposalThreshold =
    BigInt(process.env.PROPOSAL_THRESHOLD || "1000") * 10n ** decimals;
  const quorumFraction = BigInt(process.env.QUORUM_FRACTION || "4"); // 4%
  const timelockDelay = BigInt(process.env.TIMELOCK_DELAY || "86400"); // 1 day (seconds)
  const guardian = process.env.GUARDIAN_ADDRESS || deployer.address;

  // 1) Deploy GovernanceToken
  const Token = await ethers.getContractFactory("GovernanceToken");
  const token = await Token.deploy(tokenName, tokenSymbol, initialSupplyWei);
  await token.waitForDeployment();
  const tokenAddress = await token.getAddress();
  console.log("Token:", tokenAddress);

  // 2) Deploy TimelockController (TreasuryTimelock)
  const Timelock = await ethers.getContractFactory("TreasuryTimelock");
  const proposers = [];
  const executors = [ethers.ZeroAddress];
  const timelock = await Timelock.deploy(
    timelockDelay,
    proposers,
    executors,
    deployer.address
  );
  await timelock.waitForDeployment();
  const timelockAddress = await timelock.getAddress();
  console.log("Timelock:", timelockAddress);

  // 3) Deploy TreasuryGovernor
  const Governor = await ethers.getContractFactory("TreasuryGovernor");
  const governor = await Governor.deploy(
    tokenAddress,
    timelockAddress,
    votingDelay,
    votingPeriod,
    proposalThreshold,
    quorumFraction,
    guardian
  );
  await governor.waitForDeployment();
  const governorAddress = await governor.getAddress();
  console.log("Governor:", governorAddress);

  // 4) Set roles on timelock
  const PROPOSER_ROLE = await timelock.PROPOSER_ROLE();
  const EXECUTOR_ROLE = await timelock.EXECUTOR_ROLE();
  await (await timelock.grantRole(PROPOSER_ROLE, governorAddress)).wait();
  await (await timelock.grantRole(EXECUTOR_ROLE, ethers.ZeroAddress)).wait();
  console.log("Roles granted: proposer->governor, executor->anyone");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
