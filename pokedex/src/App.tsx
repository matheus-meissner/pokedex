import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import PokemonCard from './components/PokemonCard';  // Importar o PokemonCard
import Pokedex from './components/Pokedex';
import { GlobalStyle } from './globalStyle';

const App: React.FC = () => {
  return (
    <>
      {/* Aplica os estilos globais */}
      <GlobalStyle />

      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about" style={{ marginLeft: '10px' }}>About</Link>
          <Link to="/pokemon" style={{ marginLeft: '10px' }}>Pokemon</Link>
          <Link to="/pokedex" style={{ marginLeft: '10px' }}>Pokedex</Link> {/* Link para Pokedex */}
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pokemon" element={<PokemonCard />} />
          <Route path="/pokedex" element={<Pokedex />} /> {/* Rota para Pokedex */}
        </Routes>
      </Router>
    </>
  );
};


export default App;
