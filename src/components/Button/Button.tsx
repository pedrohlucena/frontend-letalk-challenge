import * as S from './styles'
import { ButtonProps } from './types'

export function Button({
  theme = 'primary',
  type,
  disabled,
  children,
  onClick,
}: ButtonProps) {
  return (
    <S.ButtonContainer
      buttonTheme={theme}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {children}
    </S.ButtonContainer>
  )
}
