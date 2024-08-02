import * as S from './styles'
import { LoanLayoutProps } from './types'

export function LoanLayout({ className, children }: LoanLayoutProps) {
  return (
    <S.LoanLayoutContainer className={className}>
      {children}
    </S.LoanLayoutContainer>
  )
}
