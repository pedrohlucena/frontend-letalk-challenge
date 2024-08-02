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
        background-color: ${theme.colors.white1};
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

      input {
        background-color: transparent;
        font-family: ${theme.fonts.families.openSans};
      }

      button {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        cursor: pointer;
        outline: inherit;
      }
    `}
`
