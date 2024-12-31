import React from 'react';

import { Routes, Route} from 'react-router-dom';

//CSS
import './App.css';

//Componenti
import NavigationBar from '../components/navbar/NavigationBar';
import Footer from '../components/footer/Footer';

//Pagine
import About from './About';
import Progetti from './Progetti';
import Contatti from './Contatti';
import Homepage from './Homepage';
import InfoProgetto from './InfoProgetto';

function App() {
  return (
    <div className="App">
      <NavigationBar />

      <header className="App-header">
        <Routes>
            <Route index element={<Homepage />}/>
            <Route path="/About" element={<About />}/>
            <Route path="/Progetti" element={<Progetti />}/>
            <Route path="/Contatti" element={<Contatti />}/>

            <Route path="/project/:id" element={<InfoProgetto />} />
        </Routes>
      </header>

      <Footer />
    </div>
  );
}

export default App;
