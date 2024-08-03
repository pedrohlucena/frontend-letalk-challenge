import * as S from './styles'
import { CellProps } from './types'

export function Cell({ children }: CellProps) {
  return <S.CellContainer>{children}</S.CellContainer>
}
