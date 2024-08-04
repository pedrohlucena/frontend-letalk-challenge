import * as S from './styles'
import { BodyProps } from './types'

export function Body({ className, children }: BodyProps) {
  return <S.BodyContainer className={className}>{children}</S.BodyContainer>
}
