import {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from 'react'
import { LoanSimulationContext } from './types'
import { LoanInstallmentFrontend, LoanSimulationFrontend } from 'models'

const FormContext = createContext<LoanSimulationContext>(
  {} as LoanSimulationContext,
)

function LoanSimulationProvider({ children }: PropsWithChildren) {
  const [loanSimulation, setLoanSimulation] = useState<LoanSimulationFrontend>()

  const [installmentsProjection, setInstallmentsProjection] = useState<
    LoanInstallmentFrontend[]
  >([])

  const [successfulCreation, setSuccessfulCreation] = useState<boolean>()

  const context = useMemo(
    () => ({
      loanSimulation,
      installmentsProjection,
      successfulCreation,
      setLoanSimulation,
      setInstallmentsProjection,
      setSuccessfulCreation,
    }),
    [loanSimulation, installmentsProjection, successfulCreation],
  )

  return <FormContext.Provider value={context}>{children}</FormContext.Provider>
}

function useLoanSimulation() {
  const context = useContext(FormContext)
  return context
}

export { LoanSimulationProvider, useLoanSimulation }
