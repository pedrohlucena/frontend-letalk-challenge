import * as S from './styles'
import { TextFieldProps } from './types'

export function TextField({
  helperText,
  error,
  ...inputProps
}: TextFieldProps) {
  return (
    <S.TextFieldContainer>
      <S.Field error={error} {...inputProps} />
      {helperText && <S.HelperText error={error}>{helperText}</S.HelperText>}
    </S.TextFieldContainer>
  )
}
