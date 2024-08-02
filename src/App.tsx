import { ThemeProvider } from 'styled-components'
import { defaultTheme, GlobalStyle } from './styles'
import { LoanSimulation } from 'pages'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <LoanSimulation />
    </ThemeProvider>
  )
}
