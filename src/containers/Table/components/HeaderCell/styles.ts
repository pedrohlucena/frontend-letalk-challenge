import styled, { css } from 'styled-components'

export const HeaderCellContainer = styled.span`
  ${({ theme }) => css`
    font: ${theme.fonts.presets.buttonText};
    color: ${theme.colors.gray4};
  `}
`
