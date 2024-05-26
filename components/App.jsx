import Intro from './Intro.jsx';
import About from './About.jsx';
import HowToBuy from './HowToBuy.jsx';
import Tokenomics from './Tokenomics.jsx';
import Roadmap from './Roadmap.jsx';
import Footer from './Footer.jsx';
import Navigation from './Navigation.jsx';

function App() {


  return (
    <div id="app" className="app mx-auto text-l box-border">
      <Navigation />
      <Intro />
      <About />
      <HowToBuy />
      <Tokenomics />
      <Roadmap />
      <Footer />
    </div>
  )
}

export default App
