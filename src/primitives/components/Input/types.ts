import { PropsWithClassName } from 'models'
import { RefCallBack } from 'react-hook-form'

export type InputProps = {
  inputRef?: React.RefObject<HTMLInputElement> | RefCallBack
  placeholder?: string
  name?: string
  value?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
} & PropsWithClassName
