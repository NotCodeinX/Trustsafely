# TrustSafely Governance Frontend

Modern Next.js frontend application for TrustSafely Governance platform with wallet connectivity via Reown (WalletConnect).

## Features

- ⚡ Next.js 16 with App Router
- 🎨 Tailwind CSS for styling
- 🔗 Reown AppKit for wallet connections
- 📱 Fully responsive design
- 🌐 Multi-chain support (Ethereum, Base, Base Sepolia)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Reown Project ID ([Get one here](https://cloud.reown.com))

### Installation

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Configure environment variables**

   Create a `.env.local` file:

   ```env
   NEXT_PUBLIC_REOWN_PROJECT_ID=your_project_id_here
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to see the application.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
frontend/
├── app/
│   ├── layout.tsx        # Root layout with Reown providers
│   ├── page.tsx          # Landing page
│   ├── providers.tsx     # Reown AppKit and React Query setup
│   └── globals.css       # Global styles
├── components/
│   └── WalletButton.tsx  # Wallet connection component
└── public/               # Static assets
```

## Wallet Integration

The application uses Reown AppKit for wallet connections. Supported wallets include:

- MetaMask
- WalletConnect
- Coinbase Wallet
- Trust Wallet
- And 300+ more wallets

## Customization

### Adding Networks

Edit `app/providers.tsx` to add or remove supported networks:

```typescript
import { mainnet, base, baseSepolia, polygon } from "@reown/appkit/networks";

// Add networks to the adapter
const wagmiAdapter = new WagmiAdapter({
  networks: [mainnet, base, baseSepolia, polygon],
  projectId,
});
```

### Styling

The application uses Tailwind CSS. Modify `app/globals.css` or component files to customize styles.

## Deployment

### Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Add environment variables
4. Deploy

### Other Platforms

Build the application:

```bash
npm run build
```

The `out` directory will contain the static export (if configured) or use `npm start` for Node.js deployment.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Reown AppKit Documentation](https://docs.reown.com/appkit)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## License

MIT
