import { z } from 'zod'

export const loanSimulationSchema = z.object({
  cpf: z.string(),
  uf: z.string(),
  birthDate: z.string(),
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
