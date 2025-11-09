import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Hero from "./pages/Hero/Hero";
import Projects from "./pages/Projects/Projects";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Hero</Link> | <Link to="/about">Projects</Link> |{" "}
      </nav>

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
