import { Form } from 'models'

export type LoanSimulationFormModel = {
  cpf: string
  uf: string
  birthDate: string
  loanValue: string
  installmentValue: string
}

export type LoanSimulationForm = Form<LoanSimulationFormModel>
