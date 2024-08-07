import { Alert, Button, TextField } from 'components'
import * as S from './styles'
import { useLoanSimulation, useLoanSimulationForm } from 'hooks'
import { api } from 'services'
import { InstallmentValidationFunction } from './types'
import {
  camelCaseToSnakeCase,
  formatMoney,
  formatLoanSimulationForFront,
  formatInstallmentProjectionForFront,
} from 'utils'
import {
  InstallmentProjectionResponse,
  LoanSimulationResponse,
  MASKS,
} from 'models'
import { ArrowIcon } from 'assets/icons'
import { Table } from 'containers'
import Snackbar from '@mui/material/Snackbar'
import SnackbarContent from '@mui/material/SnackbarContent'

export function LoanSimulation() {
  const {
    installmentsProjection,
    loanSimulation,
    successfulCreation,
    setInstallmentsProjection,
    setLoanSimulation,
    setSuccessfulCreation,
  } = useLoanSimulation()

  const { form, errors } = useLoanSimulationForm()

  const loanValue = +form.watch('loanValue')
  const installmentValue = +form.watch('installmentValue')

  const cpfField = form.control.register('cpf')
  const ufField = form.control.register('uf')
  const birthDateField = form.control.register('birthDate')
  const loanValueField = form.control.register('loanValue', {
    valueAsNumber: true,
  })
  const installmentValueField = form.control.register('installmentValue', {
    valueAsNumber: true,
  })

  const handleGetLoanSimulation = async () => {
    const { uf, loanValue, installmentValue } = form.getValues()

    const queryParams = camelCaseToSnakeCase({
      uf,
      loanValue,
      installmentValue,
    })

    const loanParams = '?' + new URLSearchParams(queryParams).toString()

    const url = `/loans/simulation${loanParams}`

    const { data } = await api.get<LoanSimulationResponse>(url)

    const frontendLoanSimulation = formatLoanSimulationForFront(data)

    setLoanSimulation(frontendLoanSimulation)
  }

  const handleGetInstallmentProjection = async () => {
    const { uf, loanValue, installmentValue } = form.getValues()

    const queryParams = camelCaseToSnakeCase({
      uf,
      loanValue,
      installmentValue,
    })

    const installmentsParams = '?' + new URLSearchParams(queryParams).toString()

    const url = `/loans/installments/projection${installmentsParams}`

    const { data } = await api.get<InstallmentProjectionResponse>(url)

    const frontendInstallmentProjection =
      formatInstallmentProjectionForFront(data)

    setInstallmentsProjection(frontendInstallmentProjection)
  }

  const handleLoanCreation = async () => {
    const { uf, installmentValue, loanValue, cpf } = form.getValues()

    const body = camelCaseToSnakeCase({
      clientCpf: cpf,
      uf,
      loanValue,
      installmentValue,
    })

    try {
      await api.post('/loans', body)
      setSuccessfulCreation(true)
    } catch (error) {
      console.error(error)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      handleGetLoanSimulation()
      handleGetInstallmentProjection()
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

  const disableSimulate = !form.formState.isValid || installmentValueError

  return (
    <S.LoanSimulationContainer>
      <S.Title>Simule e solicite o seu empréstimo.</S.Title>

      <S.Containers>
        <S.Container>
          <S.Bold>Preencha o formulário abaixo para simular</S.Bold>

          <S.WhiteBackground>
            <S.Form onSubmit={handleSubmit}>
              <S.Fields>
                <TextField
                  placeholder="CPF"
                  inputRef={cpfField.ref}
                  error={!!errors.cpf}
                  helperText={errors.cpf?.message}
                  mask={MASKS.CPF}
                  {...cpfField}
                />

                <TextField
                  placeholder="UF"
                  inputRef={ufField.ref}
                  error={!!errors.uf}
                  helperText={errors.uf?.message}
                  mask={MASKS.UF}
                  {...ufField}
                />

                <TextField
                  placeholder="DATA DE NASCIMENTO"
                  inputRef={birthDateField.ref}
                  error={!!errors.birthDate}
                  helperText={errors.birthDate?.message}
                  mask={MASKS.BIRTH_DATE}
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
          </S.WhiteBackground>
        </S.Container>

        {loanSimulation && (
          <S.Container>
            <S.Bold>
              Veja a simulação para o seu empréstimo antes de efetivar
            </S.Bold>

            <S.WhiteBackground>
              <S.Indicators>
                <S.IndicatorContainer>
                  <S.Indicator>VALOR REQUERIDO:</S.Indicator>
                  <S.Bold>{loanSimulation?.loanValue}</S.Bold>
                </S.IndicatorContainer>

                <S.IndicatorContainer>
                  <S.Indicator>TAXA DE JUROS:</S.Indicator>
                  <S.Bold>{loanSimulation?.interestRate}</S.Bold>
                </S.IndicatorContainer>

                <S.IndicatorContainer>
                  <S.Indicator>VALOR QUE DESEJA PAGAR POR MÊS</S.Indicator>
                  <S.Bold>{loanSimulation?.installmentValue}</S.Bold>
                </S.IndicatorContainer>

                <S.IndicatorContainer>
                  <S.Indicator>TOTAL DE MESES PARA QUITAR</S.Indicator>
                  <S.Bold>{loanSimulation?.monthsToPayOff}</S.Bold>
                </S.IndicatorContainer>

                <S.IndicatorContainer>
                  <S.Indicator>TOTAL DE JUROS</S.Indicator>
                  <S.Bold>{loanSimulation?.totalInterest}</S.Bold>
                </S.IndicatorContainer>

                <S.IndicatorContainer>
                  <S.Indicator>TOTAL A PAGAR</S.Indicator>
                  <S.Bold>{loanSimulation?.totalToPay}</S.Bold>
                </S.IndicatorContainer>
              </S.Indicators>

              {installmentsProjection && (
                <S.InstallmentsProjection>
                  <S.InstallmentsIndicator>
                    PROJEÇÃO DAS PARCELAS:
                  </S.InstallmentsIndicator>

                  <S.TableContainer>
                    <Table.Header>
                      <Table.HeaderRow gridSystem="15.51% 14.26% 24.91% 17.66% 12.11%">
                        <Table.HeaderCell>SALDO DEVEDOR</Table.HeaderCell>
                        <Table.HeaderCell>JUROS</Table.HeaderCell>
                        <Table.HeaderCell>
                          SALDO DEVEDOR AJUSTADO
                        </Table.HeaderCell>
                        <Table.HeaderCell>VALOR DA PARCELA</Table.HeaderCell>
                        <Table.HeaderCell>VENCIMENTO</Table.HeaderCell>
                      </Table.HeaderRow>
                    </Table.Header>

                    <S.TableBody>
                      {installmentsProjection.map((installment) => (
                        <Table.Row
                          key={installment.id}
                          gridSystem="15.51% 14.26% 24.91% 17.66% 12.11%"
                        >
                          <Table.Cell>{installment.debtorsBalance}</Table.Cell>

                          <Table.Cell>{installment.interest}</Table.Cell>

                          <Table.Cell>
                            {installment.adjustedDebtorsBalance}
                          </Table.Cell>

                          <Table.Cell>{installment.value}</Table.Cell>

                          <Table.Cell>{installment.dueDate}</Table.Cell>
                        </Table.Row>
                      ))}
                    </S.TableBody>
                  </S.TableContainer>

                  <Button theme="secondary" onClick={handleLoanCreation}>
                    EFETIVAR O EMPRÉSTIMO
                    <ArrowIcon />
                  </Button>
                </S.InstallmentsProjection>
              )}
            </S.WhiteBackground>

            <Snackbar
              open={successfulCreation}
              autoHideDuration={6000}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              onClose={() => setSuccessfulCreation(undefined)}
            >
              <SnackbarContent
                sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}
                message={
                  <Alert severity="success">
                    Empréstimo efetivado com sucesso
                  </Alert>
                }
              />
            </Snackbar>
          </S.Container>
        )}
      </S.Containers>
    </S.LoanSimulationContainer>
  )
}
