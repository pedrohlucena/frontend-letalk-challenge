import { Input } from 'primitives'
import styled, { css, DefaultTheme } from 'styled-components'
import { FieldProps, HelperTextProps } from './types'

const modifier = {
  textfield: {
    error: (theme: DefaultTheme) => css`
      outline-color: ${theme.colors.red};
    `,
  },
  helperText: {
    error: (theme: DefaultTheme) => css`
      color: ${theme.colors.red};
    `,
  },
}

export const TextFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`

export const Field = styled(Input)<FieldProps>`
  ${({ theme, error }) =>
    css`
      width: 100%;
      height: 6rem;
      border-radius: 6px;
      padding: 1.8rem 2.1rem 1.7rem;
      background-color: ${theme.colors.white};
      outline: 0.1rem solid ${theme.colors.gray1};

      ::placeholder {
        color: ${theme.colors.gray2};
      }

      ${error && modifier.textfield.error(theme)}
    `}
`

export const HelperText = styled.p<HelperTextProps>`
  ${({ theme, error }) => css`
    font: ${theme.fonts.presets.helperText};
    color: ${theme.colors.gray2};

    ${error && modifier.helperText.error(theme)}
  `}
`
