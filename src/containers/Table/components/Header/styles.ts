import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header`
  ${({ theme }) => css`
    width: 100%;
    border-bottom: 1px ${theme.colors.gray5} solid;
    padding: 1.4rem 0 1.3rem 0;
  `}
`
