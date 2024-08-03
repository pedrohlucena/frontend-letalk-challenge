import * as S from './styles'
import { HeaderCellProps } from './types'

export function HeaderCell({ children }: HeaderCellProps) {
  return <S.HeaderCellContainer>{children}</S.HeaderCellContainer>
}
