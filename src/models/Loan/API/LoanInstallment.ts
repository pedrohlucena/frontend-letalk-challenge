export type LoanInstallment = {
  id: string
  debstorsBalance: number
  interest?: number
  adjustedDebtorsBalance?: number
  installmentValue?: number
  dueDate?: string
}
