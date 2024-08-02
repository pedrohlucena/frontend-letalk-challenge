import { LoanSimulationForm, LoanSimulationFormModel } from 'models'
import { FieldErrors } from 'react-hook-form'

export type LoanSimulationFormContext = {
  form: LoanSimulationForm
  errors: FieldErrors<LoanSimulationFormModel>
}
