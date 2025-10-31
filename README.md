SafeTrust Governance (Base Sepolia)

Setup

- Create a .env with:

PRIVATE_KEY=0xYOUR_PRIVATE_KEY
BASE_SEPOLIA_RPC_URL=https://sepolia.base.org
TOKEN_NAME=SafeTrust Governance Token
TOKEN_SYMBOL=STGT
INITIAL_SUPPLY=1000000000
VOTING_DELAY=1
VOTING_PERIOD=45818
PROPOSAL_THRESHOLD=1000
QUORUM_FRACTION=4
TIMELOCK_DELAY=86400
GUARDIAN_ADDRESS=0x...

Commands

- npm install
- npm run compile
- npm run deploy:base-sepolia
