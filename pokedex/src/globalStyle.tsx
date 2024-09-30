import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --main-bg-color: #fe0065;
        --secondary-bg-color: #f2f2f2;
        --main-screen-bg-color: #98cb98;
        --main-buttons-color: #585858;
    }

    html, body {
        background-color: var(--secondary-bg-color);
        margin: 0;
        padding: 0;
        font-family: 'Press Start 2P', cursive;
        overflow-x: hidden;
        overflow-y: hidden;
        margin: 0;
        padding: 0;
        width: 100%;
        background: linear-gradient(to bottom left, white, red);

        @media screen and (max-width: 700px) {
            overflow-x: auto;
        }
    }
`;
