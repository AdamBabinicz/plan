import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   * {
      padding:0;
      margin:0;
      box-sizing: border-box;
      font-family: 'Tourney', cursive;
   }
   html {
      font-size: 62.5%;

      @media (max-width:875px) {
         html {
            font-size:55%;
         }
      }

      @media (max-width:380px) {
         html {
            font-size: 50%;
         }
      }

      a {
         text-decoration: none;
         transition: .3s;
      }
      .sr-only {
         display: none;
      }
        body {
              /* height: 200vh; */
          p {
            font-family: 'Merriweather', serif;
         }
      }
   }
`;

export default GlobalStyle;
