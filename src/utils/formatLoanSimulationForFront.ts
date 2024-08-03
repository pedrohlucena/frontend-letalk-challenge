/* eslint-disable camelcase */

import { LoanSimulationFrontend, LoanSimulationResponse } from 'models'
import { formatMoney, formatPercentage } from 'utils'

function formatInterestRate(interestRate: number) {
  const percentage = formatPercentage(interestRate)

  const formatedInterestRate = `${percentage} ao mês`
  return formatedInterestRate
}

export function formatLoanSimulationForFront(
  backendLoanSimulation: LoanSimulationResponse,
): LoanSimulationFrontend {
  const {
    loan_value,
    interest_rate,
    installment_value,
    total_interest,
    total_to_pay,
    months_to_pay_off,
  } = backendLoanSimulation

  const formatedLoanValue = formatMoney(loan_value)
  const formatedInstallmentValue = formatMoney(installment_value)
  const formatedTotalInterest = formatMoney(total_interest)
  const formatedTotalToPay = formatMoney(total_to_pay)

  const interestRate = formatInterestRate(interest_rate)

  const monthsToPayOff = `${months_to_pay_off} MESES`

  return {
    loanValue: formatedLoanValue,
    installmentValue: formatedInstallmentValue,
    totalInterest: formatedTotalInterest,
    totalToPay: formatedTotalToPay,
    interestRate,
    monthsToPayOff,
  }
}
