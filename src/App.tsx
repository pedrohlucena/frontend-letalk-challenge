import { ThemeProvider } from 'styled-components'
import { defaultTheme, GlobalStyle } from './styles'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <h1>Desafio Full-stack Letalk</h1>
    </ThemeProvider>
  )
}
