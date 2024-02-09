import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "Bellefair";
        src: url("/fonts/Bellefair/Bellefair-Regular.ttf") format("truetype");
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: "Barlow Condensed";
        src: url("/fonts/Barlow_Condensed/BarlowCondensed-Regular.ttf") format("truetype");
        font-weight: normal;
        font-style: normal;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    main {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    @media screen and (min-width: 769px) {
        main {
            margin-top: 30px;
            padding: 0 10%;
        }
    }
`;

export default GlobalStyle;