import React from 'react';
import Pokedex from './components/Pokedex';
import { GlobalStyle } from './globalStyle';

const App: React.FC = () => {
  return (
    <>
      {/* Aplica os estilos globais */}
      <GlobalStyle />
        <Pokedex/>
    </>
  );
};


export default App;
