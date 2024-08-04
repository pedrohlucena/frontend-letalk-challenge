import * as S from './styles'
import { AlertProps } from './types'

export function Alert({ severity, children }: AlertProps) {
  return (
    <S.AlertContainer severity={severity}>
      {severity === 'success' && <S.Success />}

      <div>{children}</div>
    </S.AlertContainer>
  )
}
