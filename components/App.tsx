"use client";

import Intro from "./Intro.tsx";
import About from "./About.tsx";
import HowToBuy from "./HowToBuy.tsx";
import Tokenomics from "./Tokenomics.tsx";
import Roadmap from "./Roadmap.tsx";
import Footer from "./Footer.tsx";
import Navigation from "./Navigation.tsx";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { mainnet, base } from "@wagmi/core/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const config = getDefaultConfig({
  appName: "Dat Boi",
  projectId: "34e923b3767d39d66c3413fe1689f695",
  chains: [base, mainnet],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

const queryClient = new QueryClient();

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <div
            id="app"
            className="app max-w-screen-2xl mx-auto text-l box-border"
          >
            <Navigation />
            <Intro />
            <About />
            <HowToBuy />
            <Tokenomics />
            <Roadmap />
            <Footer />
          </div>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
