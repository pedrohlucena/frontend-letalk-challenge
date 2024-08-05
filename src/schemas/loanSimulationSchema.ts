import { birthDateRegex, cpfRegex } from 'regex'
import { z } from 'zod'

export const loanSimulationSchema = z.object({
  cpf: z
    .string()
    .regex(cpfRegex, 'O CPF deve ser informado no formato 000.000.000-00')
    .length(14),
  uf: z.string(),
  birthDate: z
    .string()
    .regex(
      birthDateRegex,
      'A data de nascimento deve ser informada no formato 00/00/0000',
    )
    .length(10),
  loanValue: z.coerce
    .number({
      required_error: 'O valor do emprestimo é obrigatório',
      invalid_type_error: 'O valor do emprestimo deve ser um número',
    })
    .positive('O valor do emprestimo deve ser positivo')
    .min(50000, 'O valor mínimo do emprestimo é R$ 50.000,00'),
  installmentValue: z.coerce
    .number({
      required_error: 'O valor da parcela é obrigatório',
      invalid_type_error: 'O valor da parcela deve ser um número',
    })
    .positive('O valor da parcela deve ser positivo'),
})
