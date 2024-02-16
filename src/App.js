import { useEffect, useState, lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { initParticlesEngine } from '@tsparticles/react';
import { loadFull } from 'tsparticles';
import particlesOptions from './particles.json';
import Navbar from './components/navigation/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const Particles = lazy(() => import('@tsparticles/react'));

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
    <div id="app" className="m-0 p-0 transition-all scroll-smooth h-full flex flex-col items-center justify-center bg-gradient-to-r from-gray-950 from-10% via-slate-900 via-30% to-slate-800 to-90% text-secondary">
      {renderParticles && init && (
        <Suspense fallback={<div>Loading particles...</div>}>
          <Particles options={particlesOptions} />
        </Suspense>
      )}
      <div className="z-50 w-full h-full">
        <Navbar />
        <div className="w-full h-full flex flex-col justify-center items-center p-0">
          <Routes>
            <Route path="/" element={<Hero className="w-full h-full flex items-center justify-center bg-hero bg-no-repeat bg-cover bg-center" />} />
            <Route path="/projects" element={<Projects className="w-full h-fit flex items-center justify-center" />} />
            <Route path="/about" element={<About className="w-full h-full flex items-center justify-center" />} />
            <Route path="/contact" element={<Contact className="w-full flex justify-center items-center" />} />
          </Routes>
        </div>
        {!location.pathname.includes('/projects') && <Footer className="mt-n16 w-full flex justify-center items-center" />}
      </div>
    </div>
  );
}

export default App;
