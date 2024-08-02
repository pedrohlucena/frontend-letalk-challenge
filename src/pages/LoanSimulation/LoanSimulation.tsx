import { TextField } from 'components'
import * as S from './styles'
import { useLoanSimulationForm } from 'hooks'

export function LoanSimulation() {
  const { form } = useLoanSimulationForm()

  const cpfField = form.control.register('cpf')
  const ufField = form.control.register('uf')
  const birthDateField = form.control.register('birthDate')
  const loanValueField = form.control.register('loanValue')
  const installmentValueField = form.control.register('installmentValue')

  return (
    <S.LoanSimulationContainer>
      <S.Title>Simule e solicite o seu empréstimo.</S.Title>

      <S.Container>
        <S.Instruction>Preencha o formulário abaixo para simular</S.Instruction>

        <S.Form>
          <S.Fields>
            <TextField
              placeholder="CPF"
              inputRef={cpfField.ref}
              {...cpfField}
            />

            <TextField placeholder="UF" inputRef={ufField.ref} {...ufField} />

            <TextField
              placeholder="DATA DE NASCIMENTO"
              inputRef={birthDateField.ref}
              {...birthDateField}
            />

            <TextField
              placeholder="QUAL O VALOR DO EMPRÉSTIMO"
              inputRef={loanValueField.ref}
              {...loanValueField}
            />

            <TextField
              placeholder="QUAL VALOR DESEJA PAGAR POR MÊS?"
              inputRef={installmentValueField.ref}
              {...installmentValueField}
            />
          </S.Fields>
        </S.Form>
      </S.Container>
    </S.LoanSimulationContainer>
  )
}
