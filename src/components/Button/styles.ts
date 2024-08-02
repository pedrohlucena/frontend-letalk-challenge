import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonContainerProps } from './types'

const modifier = {
  primary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.orange1};
    color: ${theme.colors.white};
  `,
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  ${({ theme, buttonTheme }) =>
    css`
      font: ${theme.fonts.presets.buttonText};
      padding: 1.1rem 0;
      border-radius: 6px;
      box-shadow: ${theme.shadows.button};
      ${modifier[buttonTheme](theme)}
    `}
`
