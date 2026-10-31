import { Route, Routes } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";

import { Home as HomeIcon, Contact as ContactIcon } from "lucide-react";
import HomePage from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About.tsx";
import Projects from "./pages/Projects.tsx";

function App() {
  return (
    <div className="min-h-screen bg-background text-text">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;