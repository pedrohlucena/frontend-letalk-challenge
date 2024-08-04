import {
  DATE_FORMATS,
  InstallmentProjectionResponse,
  LoanInstallmentFrontend,
} from 'models'
import { formatDate, formatMoney } from 'utils'

function formatMonetaryValue(value?: number) {
  if (value === undefined) {
    return
  }

  return formatMoney(value)
}

export function formatInstallmentProjectionForFront({
  items,
}: InstallmentProjectionResponse): LoanInstallmentFrontend[] {
  return items.map((installment) => {
    const id = installment.id

    const debtorsBalance = formatMonetaryValue(
      installment.debstorsBalance,
    ) as string

    const interest = formatMonetaryValue(installment.interest)

    const adjustedDebtorsBalance = formatMonetaryValue(
      installment.adjustedDebtorsBalance,
    )

    const value = formatMonetaryValue(installment.installmentValue)

    const frontInstallment = {
      id,
      debtorsBalance,
      interest,
      adjustedDebtorsBalance,
      value,
    }

    if (installment.dueDate) {
      const dueDate = formatDate(installment.dueDate, DATE_FORMATS.dd_MM_yy)
      installment.dueDate = dueDate
    }

    return frontInstallment
  })
}
