import styled, { css } from 'styled-components'

export const CellContainer = styled.span`
  ${({ theme }) => css`
    font: ${theme.fonts.presets.cell};
    color: ${theme.colors.gray4};
  `}
`
