import styled from 'styled-components'
import InputMask from 'react-input-mask'

export const InputContainer = styled(InputMask)`
  outline: none;
  border: none;

  ::placeholder {
    opacity: 1;
  }
`
