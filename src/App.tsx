import { Route, Routes } from 'react-router-dom';
import Hero from './pages/Hero/Hero';
import Projects from './pages/Projects/Projects';
import About from './pages/About/About';
import Navbar from './components/Navbar/Navbar';
import Contact from './pages/Contact/Contact';
import './App.css';
function App() {
  return (
    <div>
      <Navbar />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
