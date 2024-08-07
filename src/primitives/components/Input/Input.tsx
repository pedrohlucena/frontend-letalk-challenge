import * as S from './styles'
import { InputProps } from './types'

export function Input({
  className,
  inputRef,
  name,
  placeholder,
  value,
  mask = '',
  onChange,
}: InputProps) {
  return (
    <S.InputContainer
      className={className}
      inputRef={inputRef}
      name={name}
      placeholder={placeholder}
      value={value}
      mask={mask}
      maskChar={null}
      alwaysShowMask={false}
      onChange={onChange}
    />
  )
}
