import * as S from './styles'
import { TextFieldProps } from './types'

export function TextField({ ...inputProps }: TextFieldProps) {
  return <S.TextFieldContainer {...inputProps} />
}
