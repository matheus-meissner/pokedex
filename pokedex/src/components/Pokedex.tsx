// Pokedex.tsx
import React from 'react';
import { PokedexWrapper, PokedexImage, ControlButtonRight, ScreenOverlay, PokedexParentContainer, ControlButtonLeft, SubmitButton, NamePokemon } from './Styledpokedex';

const Pokedex = () => {
  const handleButtonClick = () => {
    alert("Botão de controle clicado!");
  };

  return (
    <PokedexParentContainer>
      <PokedexWrapper>
        <PokedexImage src="/assets/images/pokedex.png" alt="Pokedex" />
        <ControlButtonRight onClick={handleButtonClick}></ControlButtonRight>
        <ControlButtonLeft onClick={handleButtonClick}></ControlButtonLeft>
        <SubmitButton onClick={handleButtonClick}></SubmitButton>
        <ScreenOverlay />
        <NamePokemon />
      </PokedexWrapper>
    </PokedexParentContainer>
  );
};

export default Pokedex;
