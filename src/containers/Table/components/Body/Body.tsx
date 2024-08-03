import * as S from './styles'
import { BodyProps } from './types'

export function Body({ children }: BodyProps) {
  return <S.BodyContainer>{children}</S.BodyContainer>
}
