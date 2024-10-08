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
    
    @media screen and (max-width: 700px){
        left: 35px;
    }
`;

// Imagem da Pokédex
export const PokedexImage = styled.img`
    width: 150%;  /* Ajuste para caber no contêiner */
    height: auto;
    max-width: 100vw; /* Garante que não ultrapasse a largura da tela */
    filter: drop-shadow(-10px 20px 8px rgba(0, 0, 0, 1));
    border-radius: 10px;

    @media screen and (max-width: 700px){
        width: 90%;
    }
`;

// Tela da Pokédex (Exemplo)
export const ScreenOverlay = styled.div`
    position: absolute;
    top: 24.5%;
    left: 17%;
    width: 200px;
    height: 126px;
    background-color: rgba(0, 0, 0, 0.1); /* rgb(72, 219, 251) */

    @media screen and (max-width: 700px){
        top: 11%;
        left: 10%;
        width: 83px;
        height: 53px;
        background-color: rgba(0, 0, 0, 0.1);
    }
`;

export const PokemonImg = styled.img`
    position: absolute;
    left: 40px;
    top: 3px;
    height: 100%;

    @media screen and (max-width: 700px){
        top: 0;
        left: 18%;
    }
`

// Botões interativos posicionados na imagem
export const Button = styled.button`
    position: absolute;
    background: transparent;
    border: 1px solid transparent;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
`;

export const ModalButton = styled(Button)`
    top: 4%;  /* Ajuste conforme necessário */
    left: 7%; /* Ajuste conforme necessário */
    width: 57px;
    height: 57px;
    border-radius: 50%;

    @media screen and (max-width: 700px){
        top: 0.5%;
        left: 2%;
    }
`

export const SubmitButton = styled(Button)`
    top: 47.8%;  /* Ajuste conforme necessário */
    left: 10%; /* Ajuste conforme necessário */
    width: 42px;
    height: 42px;
    border-radius: 50%;

    @media screen and (max-width: 700px){
        top: 59vh;
        left: 2vw;
        width: 3em;
        height: 3em;
        background-color: white;
    }
`

// Botão de controle (Exemplo)
export const ControlButtonRight = styled(Button)`
    top: 50%;  /* Ajuste conforme necessário */
    left: 55%; /* Ajuste conforme necessário */
    width: 33px;
    height: 29px;

    @media screen and (max-width: 700px){
        top: 60vh;
        left: 72vw;
        width: 2em;
        height: 2em;
        background-color: white;
    }
`;

export const ControlButtonLeft = styled(Button)`
    top: 50%;  /* Ajuste conforme necessário */
    left: 46%; /* Ajuste conforme necessário */
    width: 33px;
    height: 29px;

    @media screen and (max-width: 700px){
        top: 60vh;
        left: 58vw;
        width: 2em;
        height: 2em;
        background-color: white;
    }
`;

export const ControlButtonUp = styled(Button)`
    top: 47%;  /* Ajuste conforme necessário */
    left: 50.3%; /* Ajuste conforme necessário */
    width: 33px;
    height: 29px;

    @media screen and (max-width: 700px){
        top: 56vh;
        left: 65vw;
        width: 2em;
        height: 2em;
        background-color: white;
    }
`;

export const ControlButtonDown = styled(Button)`
    top: 52.5%;  /* Ajuste conforme necessário */
    left: 50.3%; /* Ajuste conforme necessário */
    width: 33px;
    height: 29px;

    @media screen and (max-width: 700px){
        top: 64vh;
        left: 65vw;
        width: 2em;
        height: 2em;
        background-color: white;
    }
`;


export const NamePokemon = styled.input`
    position: absolute;
    background-color: rgba(0, 0, 0, 0.1);
    border: 1px solid transparent;
    top: 51.5%;
    left: 23%;
    width: 72px;
    height: 35px;
    font-size: 13px;
    text-align: center;
    font-family: 'Press Start 2P', cursive;

    /* Cor da barrinha piscante (caret) */
    caret-color: white;

    /* Estilo do texto inserido */
    color: white;

    /* Estilo da borda no foco */
    &:focus {
        border: 1px solid black;  /* Muda a borda ao focar */
        outline: none;           /* Remove a borda padrão do navegador */
    }

    @media screen and (max-width: 700px){
        top: 57vh;
        left: 22vw;
        width: 6em;
        height: 4em;
        font-size: 1em;
    }
`

export const Desc = styled.div`
    position: absolute;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr; /* Define três colunas iguais */
    gap: 10px; /* Espaço entre as colunas */
    color: white;
    top: -22px;
    left: 450px;
    white-space: nowrap;
    font-size: 15px;

    div {
        display: flex;
        flex-direction: column; /* Alinha o título e o valor verticalmente */
        align-items: center; /* Centraliza os itens na coluna */
    }

    strong {
        margin-bottom: 5px; /* Espaçamento entre o título e o valor */
        font-size: 14px;
    }

    span {
        font-size: 13px;
    }

    @media screen and (max-width: 700px) {
        /* background-color: blue; */
        left: 11.4em;
        top: -1.1em;

        strong {
        margin-bottom: 1px; /* Espaçamento entre o título e o valor */
        font-size: 0.6em;
        }
        span {
        font-size: 0.6em;
        }
    }
`;


// Criando um componente de estilo condicional
export const Tipo = styled.p<{ typeCount: number }>`
    position: absolute;
    color: white;
    top: 252px;
    left: 420px;
    white-space: nowrap;
    font-size: 13.5px;
    
    /* Se houver apenas um tipo, centralizar o texto */
    ${({ typeCount }) => typeCount === 1 && `
        text-align: center;
        left: 440px; /* Ajuste para centralizar completamente */
    `}

    @media screen and (max-width: 700px) {
        left: 28.9em;
        top: 16.8em;
        font-size: 0.3em;

        ${({ typeCount }) => typeCount === 1 && `
        left: 22.5em;
        top: 12.2em;
        font-size: 0.4em;
    `}
    }
`;

export const ID = styled.p<{ id: number }>`
    position: absolute;
    color: white;
    top: 248px;
    left: 591px; /* left: 589px; */
    white-space: nowrap;
    font-size: 15px;

    /* Se tiver 2 casas decimais */
    ${({ id }) => id >= 10 && id < 100 && `
        left: 589px; /* Ajuste para centralizar completamente */
    `}

    /* Se tiver 3 casas decimais */
    ${({ id }) => id >= 100 && `
        left: 583px; /* Ajuste para centralizar completamente */
    `}

@media screen and (max-width: 700px) {
        left: 30.6em;
        top: 12.2em;
        font-size: 0.4em;

        ${({ id }) => id >= 10 && id < 100 && `
        left: 30.3em;
        top: 12.2em;
        font-size: 0.4em;
        `}

        ${({ id }) => id >= 100 && `
        left: 30em;
        top: 12.2em;
        font-size: 0.4em;
        `}
    }
`
