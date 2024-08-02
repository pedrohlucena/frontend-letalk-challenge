import { zodResolver } from '@hookform/resolvers/zod'
import { createContext, PropsWithChildren, useContext, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { LoanSimulationFormContext } from './types'
import { loanSimulationSchema } from 'schemas'
import { LoanSimulationFormModel } from 'models'

const FormContext = createContext<LoanSimulationFormContext>(
  {} as LoanSimulationFormContext,
)

function LoanSimulationFormProvider({ children }: PropsWithChildren) {
  const form = useForm<LoanSimulationFormModel>({
    defaultValues: {
      cpf: '',
      uf: '',
      birthDate: '',
      loanValue: '',
      installmentValue: '',
    },
    resolver: zodResolver(loanSimulationSchema),
    mode: 'onChange',
  })

  const { formState } = form

  const errors = formState.errors

  const context = useMemo(
    () => ({
      form,
      errors,
    }),
    [form, errors, formState],
  )

  return <FormContext.Provider value={context}>{children}</FormContext.Provider>
}

function useLoanSimulationForm() {
  const context = useContext(FormContext)
  return context
}

export { LoanSimulationFormProvider, useLoanSimulationForm }
