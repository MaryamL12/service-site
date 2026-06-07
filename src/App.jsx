import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';

import Interior from './pages/Interior';
import Whole from './pages/Whole';
import Exterior from './pages/Exterior';
import Office from './pages/Office';
import Retail from './pages/Retail';
import Building from './pages/Building';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/interior" element={<Interior />} />
        <Route path="/whole" element={<Whole />} />
        <Route path="/exterior" element={<Exterior />} />
        <Route path="/office" element={<Office />} />
        <Route path="/retail" element={<Retail />} />
        <Route path="/building" element={<Building />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;