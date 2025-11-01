import { WalletButton } from "@/components/WalletButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">TS</span>
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            TrustSafely
          </span>
        </div>
        <WalletButton />
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
            Decentralized Governance
            <br />
            Made Simple
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            TrustSafely Governance empowers communities to make collective
            decisions transparently, securely, and efficiently through
            blockchain-based voting.
          </p>
          <div className="flex justify-center space-x-4 mt-10">
            <a
              href="#features"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Explore Features
            </a>
            <a
              href="https://github.com/NotCodeinX/Trustsafely"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl border border-gray-200"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Powerful Features
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">
              Secure & Transparent
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Built on Base Sepolia with OpenZeppelin contracts. Every vote is
              recorded immutably on the blockchain, ensuring complete
              transparency and security.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">
              Community Driven
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Governance token holders can propose and vote on changes. Your
              voice matters, and every vote counts towards shaping the future of
              the platform.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
            <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">
              Timelock Protection
            </h3>
            <p className="text-gray-600 leading-relaxed">
              All proposals are protected by a timelock mechanism, giving the
              community time to review and react to changes before they're
              executed.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-6 py-20 bg-white rounded-3xl shadow-xl my-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            How It Works
          </h2>
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Get Governance Tokens
                </h3>
                <p className="text-gray-600">
                  Obtain STGT (SafeTrust Governance Token) to participate in
                  governance decisions.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Create Proposals
                </h3>
                <p className="text-gray-600">
                  Propose changes to the platform. Proposals require a minimum
                  threshold of tokens to be submitted.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Cast Your Vote
                </h3>
                <p className="text-gray-600">
                  Vote on proposals during the voting period. Your voting power
                  is proportional to your token holdings.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Execute Changes
                </h3>
                <p className="text-gray-600">
                  Successful proposals are queued in the timelock and executed
                  after the delay period, ensuring security and review time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-2xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Connect your wallet and join the governance community today.
          </p>
          <WalletButton />
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">TS</span>
            </div>
            <span className="text-lg font-semibold text-gray-700">
              TrustSafely
            </span>
          </div>
          <div className="flex space-x-6 text-gray-600">
            <a
              href="https://github.com/NotCodeinX/Trustsafely"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 transition-colors"
            >
              GitHub
            </a>
            <a href="#" className="hover:text-gray-900 transition-colors">
              Documentation
            </a>
            <a href="#" className="hover:text-gray-900 transition-colors">
              Support
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>© 2025 TrustSafely. Built with ❤️ for decentralized governance.</p>
        </div>
      </footer>
    </div>
  );
}
