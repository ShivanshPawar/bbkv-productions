import { useState } from "react";
import Loader from "./components/Loader";
import TargetCursor from './components/Cursor/TargetCursor/TargetCursor';
import SmoothScroll from './components/SmoothScroll'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Shows from './components/Shows';
import Tracklist from './components/Tracklist';
import Accolades from './components/Accolades';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative">
      {isLoading && <Loader onFinish={() => setIsLoading(false)} />}
      {!isLoading && (
        <SmoothScroll>
          <main className="fonty w-full h-screen bg-black text-white animate-hero">
            <Navbar />
            <TargetCursor />
            <Hero />
            <About />
            <Shows />
            <Tracklist />
            <Accolades />
            <Contact />
            <Footer />
          </main>
        </SmoothScroll>
      )}
    </div>
  );
}

export default App;
