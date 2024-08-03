import * as S from './styles'
import { RowProps } from './types'

export function Row({ gridSystem, children }: RowProps) {
  return <S.RowContainer gridSystem={gridSystem}>{children}</S.RowContainer>
}
