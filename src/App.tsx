import { ThemeProvider } from 'styled-components'
import { defaultTheme, GlobalStyle } from 'styles'
import { LoanSimulation } from 'pages'
import { LoanSimulationFormProvider } from 'hooks'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <LoanSimulationFormProvider>
        <LoanSimulation />
      </LoanSimulationFormProvider>
    </ThemeProvider>
  )
}
