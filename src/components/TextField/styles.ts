import { Input } from 'primitives'
import styled, { css } from 'styled-components'

export const TextFieldContainer = styled(Input)`
  ${({ theme }) =>
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
    `}
`
