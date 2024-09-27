import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import PokemonCard from './components/PokemonCard';  // Importar o PokemonCard

const App: React.FC = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about" style={{ marginLeft: '10px' }}>About</Link>
        <Link to="/pokemon" style={{ marginLeft: '10px' }}>Pokemon</Link>  {/* Adicionar link para Pokemon */}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pokemon" element={<PokemonCard />} />  {/* Adicionar rota para PokemonCard */}
      </Routes>
    </Router>
  );
};

export default App;
