import styled, { css, DefaultTheme } from 'styled-components'
import { AlertContainerProps } from './types'
import { SuccessIcon } from 'assets/icons'

const modifier = {
  severity: {
    success: (theme: DefaultTheme) => css`
      background-color: ${theme.colors.green1};
    `,
  },
}

export const AlertContainer = styled.div<AlertContainerProps>`
  ${({ theme, severity }) =>
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.2rem;

      width: fit-content;
      padding: 1.3rem 1.6rem;

      border-radius: 4px;

      font: ${theme.fonts.presets.alert};
      color: ${theme.colors.white};

      ${modifier.severity[severity](theme)};
    `}
`

export const Success = styled(SuccessIcon)`
  width: 2.2rem;
  height: 2.2rem;
  flex-shrink: 0;
`
