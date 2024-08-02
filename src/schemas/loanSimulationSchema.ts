import { z } from 'zod'

export const loanSimulationSchema = z.object({
  cpf: z.string(),
  uf: z.string(),
  birthDate: z.string(),
  loanValue: z.string(),
  installmentValue: z.string(),
})
