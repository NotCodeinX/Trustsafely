# TrustSafely Governance

<div align="center">

![TrustSafely Logo](https://img.shields.io/badge/TrustSafely-Governance-blue?style=for-the-badge&logo=ethereum)

**A decentralized governance platform for SafeTrust built on Base Sepolia**

[Features](#-features) • [Quick Start](#-quick-start) • [Documentation](#-documentation) • [Contributing](#-contributing) • [License](#-license)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Solidity](https://img.shields.io/badge/Solidity-^0.8.20-blue)](https://soliditylang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![Reown](https://img.shields.io/badge/Reown-WalletConnect-3B99FC)](https://reown.com/)

</div>

---

## 📖 Overview

TrustSafely Governance is a comprehensive decentralized governance system that enables communities to make collective decisions transparently, securely, and efficiently through blockchain-based voting. Built with OpenZeppelin's battle-tested smart contracts and deployed on Base Sepolia, it provides a robust foundation for on-chain governance.

### Key Components

- **Governance Token (STGT)**: ERC20Votes token with automatic delegation
- **Treasury Governor**: Timelock-based governance contract
- **Treasury Timelock**: Security mechanism for proposal execution
- **Frontend Interface**: Modern Next.js application with wallet connectivity

---

## ✨ Features

### 🔒 Security First

- **OpenZeppelin Contracts**: Built on industry-standard, audited smart contracts
- **Timelock Protection**: All proposals are queued with a delay, allowing time for review
- **Guardian Address**: Emergency mechanism for critical situations
- **Immutable Voting Records**: All votes are permanently recorded on-chain

### 🗳️ Governance Features

- **Proposal Creation**: Token holders can submit proposals above a threshold
- **Voting System**: Weighted voting based on token holdings
- **Voting Periods**: Configurable voting delays and periods
- **Quorum Requirements**: Minimum participation thresholds for valid proposals
- **Automatic Delegation**: New token recipients automatically delegate to themselves

### 🎨 Modern Frontend

- **Next.js 16**: Latest React framework with App Router
- **Reown Integration**: Seamless wallet connection via WalletConnect
- **Responsive Design**: Beautiful, modern UI that works on all devices
- **Multi-Chain Support**: Works with Ethereum, Base, and Base Sepolia

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ and npm
- **Git**
- **A crypto wallet** (MetaMask, WalletConnect compatible)
- **Base Sepolia testnet ETH** for deploying contracts
- **Reown Project ID** (get one at [cloud.reown.com](https://cloud.reown.com))

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/NotCodeinX/Trustsafely.git
   cd Trustsafely
   ```

2. **Install dependencies**

   ```bash
   # Install smart contract dependencies
   npm install

   # Install frontend dependencies
   cd frontend
   npm install
   cd ..
   ```

3. **Configure environment variables**

   Create a `.env` file in the root directory:

   ```env
   # Smart Contract Deployment
   PRIVATE_KEY=0xYOUR_PRIVATE_KEY
   BASE_SEPOLIA_RPC_URL=https://sepolia.base.org

   # Token Configuration
   TOKEN_NAME=SafeTrust Governance Token
   TOKEN_SYMBOL=STGT
   INITIAL_SUPPLY=1000000000

   # Governance Parameters
   VOTING_DELAY=1
   VOTING_PERIOD=45818
   PROPOSAL_THRESHOLD=1000
   QUORUM_FRACTION=4
   TIMELOCK_DELAY=86400
   GUARDIAN_ADDRESS=0x...
   ```

   Create a `.env.local` file in the `frontend` directory:

   ```env
   NEXT_PUBLIC_REOWN_PROJECT_ID=your_project_id_here
   ```

4. **Compile smart contracts**

   ```bash
   npm run compile
   ```

5. **Deploy to Base Sepolia**

   ```bash
   npm run deploy:base-sepolia
   ```

6. **Start the frontend development server**

   ```bash
   cd frontend
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
Trustsafely/
├── contracts/                 # Smart contracts
│   ├── GovernanceToken.sol   # ERC20Votes governance token
│   ├── TreasuryGovernor.sol # Governor contract
│   └── TreasuryTimelock.sol  # Timelock contract
├── scripts/                   # Deployment and utility scripts
│   ├── deploy.js            # Main deployment script
│   ├── delegate.js           # Token delegation script
│   ├── propose.js            # Proposal creation script
│   └── verify.js             # Contract verification script
├── test/                      # Test files
│   ├── Governance.test.js    # Governance tests
│   ├── Proposals.test.js     # Proposal tests
│   └── Timelock.test.js      # Timelock tests
├── frontend/                  # Next.js frontend application
│   ├── app/                  # Next.js App Router
│   │   ├── layout.tsx        # Root layout with providers
│   │   ├── page.tsx          # Landing page
│   │   └── providers.tsx     # Reown AppKit providers
│   ├── components/           # React components
│   │   └── WalletButton.tsx  # Wallet connection button
│   └── public/               # Static assets
├── hardhat.config.js         # Hardhat configuration
├── package.json              # Project dependencies
└── README.md                 # This file
```

---

## 🛠️ Development

### Smart Contracts

#### Compile Contracts

```bash
npm run compile
```

#### Run Tests

```bash
npx hardhat test
```

#### Deploy to Base Sepolia

```bash
npm run deploy:base-sepolia
```

#### Create a Proposal

```bash
npx hardhat run scripts/propose.js --network baseSepolia
```

#### Delegate Tokens

```bash
npx hardhat run scripts/delegate.js --network baseSepolia
```

### Frontend

#### Development Server

```bash
cd frontend
npm run dev
```

#### Build for Production

```bash
cd frontend
npm run build
```

#### Start Production Server

```bash
cd frontend
npm start
```

#### Lint Code

```bash
cd frontend
npm run lint
```

---

## 📚 Documentation

### Smart Contracts

#### GovernanceToken.sol

ERC20 token with voting capabilities. Features automatic delegation for new token recipients.

**Key Functions:**

- `delegate(address to)`: Delegate voting power
- `getVotes(address account)`: Get voting power
- `getPastVotes(address account, uint256 blockNumber)`: Get historical voting power

#### TreasuryGovernor.sol

Governor contract that manages proposals and voting.

**Key Functions:**

- `propose(...)`: Create a new proposal
- `castVote(uint256 proposalId, uint8 support)`: Vote on a proposal
- `execute(...)`: Execute a successful proposal

#### TreasuryTimelock.sol

Timelock contract that delays proposal execution for security.

**Key Functions:**

- `schedule(...)`: Schedule a transaction
- `execute(...)`: Execute a scheduled transaction
- `cancel(...)`: Cancel a scheduled transaction

### Frontend Components

#### WalletButton

Connect wallet button component using Reown AppKit.

```tsx
import { WalletButton } from "@/components/WalletButton";

<WalletButton />;
```

#### Providers

Reown AppKit and React Query providers setup.

---

## 🧪 Testing

The project includes comprehensive tests for all smart contracts:

```bash
# Run all tests
npx hardhat test

# Run specific test file
npx hardhat test test/Governance.test.js

# Run tests with coverage
npx hardhat coverage
```

---

## 🔧 Configuration

### Governance Parameters

- **VOTING_DELAY**: Number of blocks before voting starts (default: 1)
- **VOTING_PERIOD**: Number of blocks voting is open (default: 45818)
- **PROPOSAL_THRESHOLD**: Minimum tokens required to create a proposal (default: 1000)
- **QUORUM_FRACTION**: Minimum percentage of total supply required for quorum (default: 4)
- **TIMELOCK_DELAY**: Delay in seconds before proposal execution (default: 86400)

### Network Configuration

The project is configured for Base Sepolia testnet. To add additional networks, modify `hardhat.config.js` and `frontend/app/providers.tsx`.

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**

2. **Create a feature branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**

   - Write clean, commented code
   - Follow existing code style
   - Add tests for new features
   - Update documentation as needed

4. **Commit your changes**

   ```bash
   git commit -m 'Add some feature'
   ```

   We follow [Conventional Commits](https://www.conventionalcommits.org/) specification.

5. **Push to your branch**

   ```bash
   git push origin feature/your-feature-name
   ```

6. **Open a Pull Request**

   - Provide a clear description of changes
   - Link any related issues
   - Request reviews from maintainers

### Code Style

- **Solidity**: Follow [Solidity Style Guide](https://docs.soliditylang.org/en/latest/style-guide.html)
- **JavaScript/TypeScript**: Use ESLint configuration provided
- **Commits**: Follow Conventional Commits format

### Reporting Issues

Found a bug or have a feature request? Please open an [issue](https://github.com/NotCodeinX/Trustsafely/issues).

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [OpenZeppelin](https://openzeppelin.com/) for battle-tested smart contract libraries
- [Reown](https://reown.com/) (formerly WalletConnect) for wallet connectivity
- [Base](https://base.org/) for the Layer 2 infrastructure
- [Hardhat](https://hardhat.org/) for the development environment
- [Next.js](https://nextjs.org/) for the frontend framework

---

## 🔗 Links

- **GitHub Repository**: [https://github.com/NotCodeinX/Trustsafely](https://github.com/NotCodeinX/Trustsafely)
- **Base Sepolia Explorer**: [https://sepolia.basescan.org/](https://sepolia.basescan.org/)
- **Reown Dashboard**: [https://cloud.reown.com](https://cloud.reown.com)
- **OpenZeppelin Contracts**: [https://docs.openzeppelin.com/contracts](https://docs.openzeppelin.com/contracts)

---

## 📧 Contact

For questions, suggestions, or support, please:

- Open an [issue](https://github.com/NotCodeinX/Trustsafely/issues) on GitHub
- Reach out to the maintainers

---

<div align="center">

**Built with ❤️ for decentralized governance**

⭐ Star this repo if you find it helpful!

</div>
