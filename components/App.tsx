import Intro from "./Intro.tsx";
import About from "./About.tsx";
import HowToBuy from "./HowToBuy.tsx";
import Tokenomics from "./Tokenomics.tsx";
import Roadmap from "./Roadmap.tsx";
import Footer from "./Footer.tsx";
import Navigation from "./Navigation.tsx";

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
