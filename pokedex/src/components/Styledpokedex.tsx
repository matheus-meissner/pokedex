// StyledPokedex.ts
import styled from 'styled-components';

// Contêiner pai que vai usar Flexbox para centralizar
export const PokedexParentContainer = styled.div`
    display: flex;
    justify-content: center;/* Centraliza horizontalmente */
    height: 100vh;/* Garante que ocupe 100% da altura da tela */
    width: 89vw; /* Garante que ocupe 100% da largura da tela */
    overflow-x: hidden; /* Remove qualquer scroll horizontal */
    position: relative;
    padding-top: 19vh;/* Mantém o espaço no topo sem centralizar no eixo Y */
`;

// Container principal para a imagem
export const PokedexWrapper = styled.div`
    display: inline-block;
    margin: 0 auto;
    position: relative;
    max-width: 100%;  /* Garante que o contêiner nunca ultrapasse a largura da tela */
`;

// Imagem da Pokédex
export const PokedexImage = styled.img`
    width: 150%;  /* Ajuste para caber no contêiner */
    height: auto;
    max-width: 100vw; /* Garante que não ultrapasse a largura da tela */
`;

// Tela da Pokédex (Exemplo)
export const ScreenOverlay = styled.div`
    position: absolute;
    top: 24.5%;
    left: 17%;
    width: 200px;
    height: 126px;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
`;

// Botões interativos posicionados na imagem
export const Button = styled.button`
    position: absolute;
    background: transparent;
    border: 1px solid transparent;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
`;

export const SubmitButton = styled(Button)`
    top: 47.8%;  /* Ajuste conforme necessário */
    left: 10%; /* Ajuste conforme necessário */
    width: 42px;
    height: 42px;
    border-radius: 50%;
`

// Botão de controle (Exemplo)
export const ControlButtonRight = styled(Button)`
    top: 50%;  /* Ajuste conforme necessário */
    left: 55%; /* Ajuste conforme necessário */
    width: 33px;
    height: 29px;
`;

export const ControlButtonLeft = styled(Button)`
    top: 50%;  /* Ajuste conforme necessário */
    left: 46%; /* Ajuste conforme necessário */
    width: 33px;
    height: 29px;
`;


export const NamePokemon = styled.input`
    position: absolute;
    background-color: rgba(0, 0, 0, 0.1);
    border: 1px solid transparent;
    top: 51.5%;
    left: 23%;
    width: 72px;
    height: 35px;

    /* Cor da barrinha piscante (caret) */
    caret-color: red;

    /* Estilo do texto inserido */
    color: white;

    /* Estilo da borda no foco */
    &:focus {
        border: 1px solid black;  /* Muda a borda ao focar */
        outline: none;           /* Remove a borda padrão do navegador */
    }
`