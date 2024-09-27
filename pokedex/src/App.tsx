import React, { useState } from 'react';
import { GlobalStyle } from './globalStyle';
import InstructionsModal from './components/InstructionsModal';
import Pokedex from './components/Pokedex';

const App: React.FC = () => {
  // Estado para controlar a abertura do modal
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <>
      <GlobalStyle />
      <InstructionsModal 
        isOpen={isModalOpen}  // Passa o estado de abertura do modal
        onClose={() => setIsModalOpen(false)}  // Função para fechar o modal
      />
      <Pokedex /> {/* Adicione sua Pokedex aqui */}
    </>
  );
}

export default App;
