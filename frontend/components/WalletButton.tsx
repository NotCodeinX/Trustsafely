"use client";

import { useAppKitAccount, useAppKit } from "@reown/appkit/react";

export function WalletButton() {
  const { address, isConnected } = useAppKitAccount();
  const { open } = useAppKit();

  return (
    <button
      onClick={() => open()}
      className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
    >
      {isConnected
        ? `${address?.slice(0, 6)}...${address?.slice(-4)}`
        : "Connect Wallet"}
    </button>
  );
}
