import styled, { css } from 'styled-components'
import { HeaderRowContainerProps } from './types'

export const HeaderRowContainer = styled.div<HeaderRowContainerProps>`
  ${({ gridSystem }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(1px, 1fr));
    column-gap: 3.4rem;
    align-items: center;

    ${gridSystem && `grid-template-columns: ${gridSystem};`}
  `}
`
