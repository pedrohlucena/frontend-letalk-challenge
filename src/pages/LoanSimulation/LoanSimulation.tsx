import { Button, TextField } from 'components'
import * as S from './styles'
import { useLoanSimulationForm } from 'hooks'
import { api } from 'services'
import { InstallmentValidationFunction } from './types'
import { formatMoney } from 'utils'

export function LoanSimulation() {
  const { form, errors } = useLoanSimulationForm()

  const loanValue = +form.watch('loanValue')
  const installmentValue = +form.watch('installmentValue')

  const cpfField = form.control.register('cpf')
  const ufField = form.control.register('uf')
  const birthDateField = form.control.register('birthDate')
  const loanValueField = form.control.register('loanValue')
  const installmentValueField = form.control.register('installmentValue')

  const disableSimulate = !form.formState.isValid

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const loan = form.getValues()

    try {
      await api.post('/loan/simulation', loan)
    } catch (error) {
      console.error(error)
    }
  }

  const handleInstallmentValidation: InstallmentValidationFunction = (
    loanValue,
    installmentValue,
  ) => {
    const onePercentLoanValue = loanValue / 100

    const installmentMinValueSatisfied = installmentValue >= onePercentLoanValue

    if (!installmentMinValueSatisfied) {
      const formattedInstallment = formatMoney(onePercentLoanValue)

      return [
        true,
        `O valor da parcela deve ser maior ou igual a ${formattedInstallment}`,
      ]
    }

    const error = !!form.formState.errors.installmentValue
    const errorMessage = form.formState.errors.installmentValue?.message

    return [error, errorMessage]
  }

  const [installmentValueError, installmentValueErrorMessage] =
    handleInstallmentValidation(loanValue, installmentValue)

  return (
    <S.LoanSimulationContainer>
      <S.Title>Simule e solicite o seu empréstimo.</S.Title>

      <S.Container>
        <S.Instruction>Preencha o formulário abaixo para simular</S.Instruction>

        <S.Form onSubmit={handleSubmit}>
          <S.Fields>
            <TextField
              placeholder="CPF"
              inputRef={cpfField.ref}
              error={!!errors.cpf}
              helperText={errors.cpf?.message}
              {...cpfField}
            />

            <TextField
              placeholder="UF"
              inputRef={ufField.ref}
              error={!!errors.uf}
              helperText={errors.uf?.message}
              {...ufField}
            />

            <TextField
              placeholder="DATA DE NASCIMENTO"
              inputRef={birthDateField.ref}
              error={!!errors.birthDate}
              helperText={errors.birthDate?.message}
              {...birthDateField}
            />

            <TextField
              placeholder="QUAL O VALOR DO EMPRÉSTIMO"
              inputRef={loanValueField.ref}
              error={!!errors.loanValue}
              helperText={errors.loanValue?.message}
              {...loanValueField}
            />

            <TextField
              placeholder="QUAL VALOR DESEJA PAGAR POR MÊS?"
              inputRef={installmentValueField.ref}
              error={installmentValueError}
              helperText={installmentValueErrorMessage}
              {...installmentValueField}
            />
          </S.Fields>

          <Button disabled={disableSimulate}>SIMULAR</Button>
        </S.Form>
      </S.Container>
    </S.LoanSimulationContainer>
  )
}
