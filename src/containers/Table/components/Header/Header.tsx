import * as S from './styles'
import { HeaderProps } from './types'

export function Header({ children }: HeaderProps) {
  return <S.HeaderContainer>{children}</S.HeaderContainer>
}
