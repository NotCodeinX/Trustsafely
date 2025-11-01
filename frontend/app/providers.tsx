"use client";

import { createAppKit } from "@reown/appkit/react";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { mainnet, baseSepolia, base } from "@reown/appkit/networks";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

// Get projectId from environment variable or use default
const projectId = process.env.NEXT_PUBLIC_REOWN_PROJECT_ID || "YOUR_PROJECT_ID";

// Create a metadata object
const metadata = {
  name: "TrustSafely Governance",
  description: "Decentralized governance platform for SafeTrust",
  url: "https://trustsafely.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

// Create WagmiAdapter instance
const wagmiAdapter = new WagmiAdapter({
  networks: [mainnet, base, baseSepolia],
  projectId,
});

// Create AppKit instance - this should be called once
export const appKit = createAppKit({
  adapters: [wagmiAdapter],
  networks: [mainnet, base, baseSepolia],
  projectId,
  metadata,
  features: {
    analytics: true,
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  // Create a query client with useState to ensure it's only created once
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
