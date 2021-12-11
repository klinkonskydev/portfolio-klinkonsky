import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle` 
    :root
    {
        /* typograph settings */

        --font-family: 'IBM Plex Sans', sans-serif, Arial;
        --biggest-text: 800 3.75rem var(--font-family);
        --space-normal-text: 300 1.375rem var(--font-family);
        --sora-normal-text: 300 1.375rem 'Sora', Arial;

        /* border settings */
        --biggest-radius: 20px;

        /* color settings */
        --blue-grotto: #4B7BF5;
        --blue-grotto-ligth: #4b7bf563;

        --green-default: #1bdf35;
        --orange-default: #ffc400;
        --red-default: #ff3c00;

        /* Shadows */
        --shadow-color: #21212131;
        --box-ligth: 0 0 5px var(--shadow-color);
    }

    *
    {
        padding: 0;
        margin: 0;

        box-sizing: border-box;
    }

    @media (max-width: 1080px){
        html {
            font-size: 93.75%;
        }
    }

    @media (max-width: 720px){
        html {
            font-size: 87.5%;
        }
    }

    body
    {
        scroll-behavior: smooth;
        font-family: 'IBM Plex Sans', sans-serif;
    }

`;
