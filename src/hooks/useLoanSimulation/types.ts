import {
  LoanInstallmentFrontend,
  LoanSimulationFrontend,
  StateSetter,
} from 'models'

export type LoanSimulationContext = {
  loanSimulation: LoanSimulationFrontend | undefined
  installmentsProjection: LoanInstallmentFrontend[]
  setLoanSimulation: StateSetter<LoanSimulationFrontend | undefined>
  setInstallmentsProjection: StateSetter<LoanInstallmentFrontend[]>
}
