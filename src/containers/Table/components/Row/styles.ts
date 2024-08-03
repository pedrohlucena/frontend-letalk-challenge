import styled, { css } from 'styled-components'
import { RowContainerProps } from './types'

export const RowContainer = styled.div<RowContainerProps>`
  ${({ theme, gridSystem }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(1px, 1fr));
    column-gap: 3.4rem;
    align-items: center;

    border-bottom: 1px ${theme.colors.gray5} solid;
    padding: 1.4rem 0 1.3rem 0;

    ${gridSystem && `grid-template-columns: ${gridSystem};`}
  `}
`
