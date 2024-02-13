import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadFull } from 'tsparticles';
import particlesOptions from './particles.json';
import Navbar from './components/navigation/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const location = useLocation();
  const renderParticles = location.pathname;

  const [init, setInit] = useState(false);

  useEffect(() => {
    if (init) {
      return;
    }

    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, [init]);

  return (
    <div id="app" className="relative overflow-hidden">
      {renderParticles && init && <Particles options={particlesOptions} />}
      <div className="relative z-10">
        <Navbar />
        <div className="overflow-y-auto max-h-screen">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/projects" element={<Projects className="w-full p-0 h-fit flex items-center justify-center" />} />
            <Route path="/about" element={<About className="w-fit h-fit flex items-center justify-center" />} />
            <Route path="/contact" element={<Contact className="w-full flex justify-center items-center" />} />
          </Routes>
        </div>
        {/* Conditionally render the footer */}
        {!location.pathname.includes('/projects') && <Footer className="w-full flex justify-center items-center" />}
      </div>
    </div>
  );
}

export default App;
