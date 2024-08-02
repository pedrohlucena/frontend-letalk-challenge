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
