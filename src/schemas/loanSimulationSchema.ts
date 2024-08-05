import { VALID_UFS } from 'mock'
import { birthDateRegex, cpfRegex } from 'regex'
import { z } from 'zod'

const formattedValidUfs = VALID_UFS.join(', ')

const ERROR_MESSAGES = {
  INVALID_CPF: 'O CPF deve ser informado no formato 000.000.000-00',
  INVALID_BIRTH_DATE:
    'A data de nascimento deve ser informada no formato 00/00/0000',
  REQUIRED_LOAN_VALUE: 'O valor do empréstimo é obrigatório',
  LOAN_VALUE_MUST_BE_NUMBER: 'O valor do empréstimo deve ser um número',
  LOAN_VALUE_MUST_BE_POSITIVE: 'O valor do empréstimo deve ser positivo',
  MIN_LOAN_VALUE: 'O valor mínimo do empréstimo é R$ 50.000,00',
  REQUIRED_INSTALLMENT_VALUE: 'O valor da parcela é obrigatório',
  INSTALLMENT_VALUE_MUST_BE_NUMBER: 'O valor da parcela deve ser um número',
  INSTALLMENT_VALUE_MUST_BE_POSITIVE: 'O valor da parcela deve ser positivo',
  INVALID_UF: `UF inválida. Unidades federativas suportadas: ${formattedValidUfs}.`,
}

export const loanSimulationSchema = z.object({
  cpf: z.string().regex(cpfRegex, ERROR_MESSAGES.INVALID_CPF).length(14),
  uf: z.enum(VALID_UFS, { message: ERROR_MESSAGES.INVALID_UF }),
  birthDate: z
    .string()
    .regex(birthDateRegex, ERROR_MESSAGES.INVALID_BIRTH_DATE)
    .length(10),
  loanValue: z.coerce
    .number({
      required_error: ERROR_MESSAGES.REQUIRED_LOAN_VALUE,
      invalid_type_error: ERROR_MESSAGES.LOAN_VALUE_MUST_BE_NUMBER,
    })
    .positive(ERROR_MESSAGES.LOAN_VALUE_MUST_BE_POSITIVE)
    .min(50000, ERROR_MESSAGES.MIN_LOAN_VALUE),
  installmentValue: z.coerce
    .number({
      required_error: ERROR_MESSAGES.REQUIRED_INSTALLMENT_VALUE,
      invalid_type_error: ERROR_MESSAGES.INSTALLMENT_VALUE_MUST_BE_NUMBER,
    })
    .positive(ERROR_MESSAGES.INSTALLMENT_VALUE_MUST_BE_POSITIVE),
})
