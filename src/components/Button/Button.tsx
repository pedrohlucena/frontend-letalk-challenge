import * as S from './styles'
import { ButtonProps } from './types'

export function Button({
  theme = 'primary',
  type,
  disabled,
  children,
}: ButtonProps) {
  return (
    <S.ButtonContainer buttonTheme={theme} disabled={disabled} type={type}>
      {children}
    </S.ButtonContainer>
  )
}
