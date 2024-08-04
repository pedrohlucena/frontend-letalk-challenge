import {
  LoanInstallmentFrontend,
  LoanSimulationFrontend,
  StateSetter,
} from 'models'

export type LoanSimulationContext = {
  loanSimulation: LoanSimulationFrontend | undefined
  installmentsProjection: LoanInstallmentFrontend[]
  successfulCreation: boolean | undefined
  setLoanSimulation: StateSetter<LoanSimulationFrontend | undefined>
  setInstallmentsProjection: StateSetter<LoanInstallmentFrontend[]>
  setSuccessfulCreation: StateSetter<boolean | undefined>
}
