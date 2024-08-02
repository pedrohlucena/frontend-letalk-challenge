import styled, { css } from 'styled-components'
import { LoanLayout } from 'layouts'

export const LoanSimulationContainer = styled(LoanLayout)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font: ${theme.fonts.presets.title};
    color: ${theme.colors.gray};
    margin-bottom: 8.1rem;
  `}
`

export const Instruction = styled.b`
  ${({ theme }) => css`
    font: ${theme.fonts.presets.instruction};
    color: ${theme.colors.black};
  `}
`

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.6rem;
`

export const Form = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    padding: 7rem 3rem 3.8rem 3.3rem;
    background-color: ${theme.colors.white};
  `}
`

export const Fields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`
