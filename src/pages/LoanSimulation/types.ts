type Error = boolean

type ErrorMessage = string | undefined

export type InstallmentValidationFunction = (
  loanValue: number,
  installmentValue: number,
) => [Error, ErrorMessage]
