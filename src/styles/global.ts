import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    ${({ theme }) => css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      html {
        font-size: 62.5%; // 1rem = 10px
      }

      body {
        -webkit-font-smoothing: antialiased;
      }

      body,
      input,
      textarea,
      button {
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        font-size: 1.6rem;
      }
    `}
`
