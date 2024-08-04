import { ThemeProvider } from 'styled-components'
import { defaultTheme, GlobalStyle } from 'styles'
import { LoanSimulation } from 'pages'
import { LoanSimulationFormProvider, LoanSimulationProvider } from 'hooks'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <LoanSimulationProvider>
        <LoanSimulationFormProvider>
          <LoanSimulation />
        </LoanSimulationFormProvider>
      </LoanSimulationProvider>
    </ThemeProvider>
  )
}
