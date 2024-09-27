import styled from 'styled-components';

// Wrapper do modal
export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; // Garantir que o modal esteja na frente de tudo
`;

// Conteúdo do modal
export const ModalContent = styled.div`
  background: linear-gradient(to bottom left, white, #ff6666);
  padding: 20px;
  border-radius: 10px;
  border: 5px solid black;
  text-align: center;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`;

// Botão de fechar o modal
export const CloseButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: red;
  color: white;
  border: 2px solid black;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #8B0000;
    border: 2px solid white;
  }
`;

export const Tutorial = styled.p`
    font-size: medium;
    font-weight: bold;
    margin-bottom: 2px;
    margin-top: 2px;
    font-style: italic;
    text-decoration: underline;
`

export const TitleModal = styled.p`
    font-size: small;
    font-weight: bold;
    margin: 0;
`

export const TextModal = styled.p`
    font-size: small;
    margin: 0;
`