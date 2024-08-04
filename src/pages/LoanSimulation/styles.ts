import styled, { css } from 'styled-components'
import { LoanLayout } from 'layouts'
import { Table } from 'containers'

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

export const Bold = styled.b`
  ${({ theme }) => css`
    font: ${theme.fonts.presets.instruction};
    color: ${theme.colors.black};
  `}
`

export const Indicator = styled.p`
  ${({ theme }) => css`
    font: ${theme.fonts.presets.indicator};
    color: ${theme.colors.gray2};
  `}
`

export const Containers = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 7.2rem;
`

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.6rem;
`

export const WhiteBackground = styled.div`
  ${({ theme }) => css`
    width: 100%;
    border-radius: 5px;
    padding: 7rem 3rem 3.8rem 3.3rem;
    background-color: ${theme.colors.white};
  `}
`

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

export const Fields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`

export const Indicators = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 6.9rem;
  column-gap: 10.6rem;
  margin-bottom: 7.3rem;
`

export const IndicatorContainer = styled.span`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`

export const InstallmentsProjection = styled.div``

export const InstallmentsIndicator = styled(Indicator)`
  margin-bottom: 1.9rem;
`

export const TableContainer = styled(Table.Container)`
  margin-bottom: 5.4rem;
`

export const TableBody = styled(Table.Body)`
  max-height: 88.3rem;
`
