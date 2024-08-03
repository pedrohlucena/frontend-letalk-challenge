import * as S from './styles'
import { HeaderRowProps } from './types'

export function HeaderRow({ gridSystem, children }: HeaderRowProps) {
  return (
    <S.HeaderRowContainer gridSystem={gridSystem}>
      {children}
    </S.HeaderRowContainer>
  )
}
