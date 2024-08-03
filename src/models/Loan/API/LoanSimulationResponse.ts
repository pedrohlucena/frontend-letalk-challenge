export type LoanSimulationResponse = {
  loan_value: number
  interest_rate: number
  installment_value: number
  total_interest: number
  total_to_pay: number
  months_to_pay_off: number
}
