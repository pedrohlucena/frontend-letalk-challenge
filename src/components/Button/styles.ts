import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonContainerProps } from './types'

const modifier = {
  primary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.orange1};
    color: ${theme.colors.white};

    *[fill] {
      fill: ${theme.colors.white};
    }
  `,
  secondary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.green1};
    color: ${theme.colors.white};

    *[fill] {
      fill: ${theme.colors.white};
    }
  `,
  disabled: css`
    opacity: 0.7;
    cursor: not-allowed;
  `,
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  ${({ theme, buttonTheme, disabled }) =>
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      font: ${theme.fonts.presets.buttonText};
      padding: 1.1rem 0;
      border-radius: 6px;
      box-shadow: ${theme.shadows.button};

      ${modifier[buttonTheme](theme)}

      ${disabled && modifier.disabled}
    `}
`
