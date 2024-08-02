import * as S from './styles'
import { ButtonProps } from './types'

export function Button({ theme = 'primary', type, children }: ButtonProps) {
  return (
    <S.ButtonContainer buttonTheme={theme} type={type}>
      {children}
    </S.ButtonContainer>
  )
}
