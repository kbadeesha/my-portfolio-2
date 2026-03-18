import { Route, Routes } from 'react-router-dom';
import Hero from './pages/Hero/Hero';
import Projects from './pages/Projects/Projects';
import About from './pages/About/About';
import Navbar from './components/Navbar/Navbar';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
