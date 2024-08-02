import * as S from './styles'
import { InputProps } from './types'

export function Input({
  className,
  inputRef,
  name,
  placeholder,
  value,
  onChange,
}: InputProps) {
  return (
    <S.InputContainer
      className={className}
      ref={inputRef}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  )
}
