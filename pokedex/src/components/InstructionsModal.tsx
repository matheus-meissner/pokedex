import React from 'react';
import { ModalWrapper, ModalContent, CloseButton, Tutorial, TitleModal, TextModal } from './StyledInstructionsModal';

// Aqui, aceitamos as props `isOpen` e `onClose` para controlar o modal externamente.
interface InstructionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InstructionsModal: React.FC<InstructionsModalProps> = ({ isOpen, onClose }) => {
  // Se o modal não estiver aberto, não renderiza nada
  if (!isOpen) return null;

  return (
    <ModalWrapper>
      <ModalContent>
        <h2>Bem-vindo à Pokedex!</h2>
        <p>
          <Tutorial>Use as setas para navegar pelos Pokemon:</Tutorial>
          <br />
          <TitleModal>Setas para cima e para baixo:<br /></TitleModal> <TextModal>Navega entre as versões dos Pokemon (frontal, shiny, costas);</TextModal>
          <br />
          <TitleModal>Setas para a esquerda e direita:<br />
          </TitleModal> 
          <TextModal>Avança e retorna entre diferentes Pokemon;</TextModal>
          <br />
          <Tutorial>Pesquisar um Pokemon:</Tutorial>
          <br />
          <TitleModal>Campo de texto (verde):<br /></TitleModal> 
          <TextModal>Digite o nome do Pokemon que deseja visualizar, após isso, pressione o botão redondo ao lado esquerdo do campo para encontrá-lo;</TextModal>
          <br />
          <Tutorial>Abrir novamente estas instruções:</Tutorial>
          <br />
          <TitleModal>Botão Azul (canto superior esquerdo):<br />
          </TitleModal> 
          <TextModal>Clique no botão azul do canto superior esquerdo que esta aba de intruções será aberta novamente;</TextModal>
        </p>
        <CloseButton onClick={onClose}>Entendi!</CloseButton>
      </ModalContent>
    </ModalWrapper>
  );
};

export default InstructionsModal;
