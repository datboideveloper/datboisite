import Intro from "./Intro.tsx";
import About from "./About.tsx";
import HowToBuy from "./HowToBuy.tsx";
import Tokenomics from "./Tokenomics.tsx";
import Roadmap from "./Roadmap.tsx";
import Footer from "./Footer.tsx";
import Navigation from "./Navigation.tsx";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { base } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

function App() {
  return (
    <div id="app" className="app max-w-screen-2xl mx-auto text-l box-border">
      <Navigation />
      <Intro />
      <About />
      <HowToBuy />
      <Tokenomics />
      <Roadmap />
      <Footer />
    </div>
  );
}

export default App;
