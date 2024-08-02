import { InputProps } from 'primitives/components/Input/types'

export type FieldProps = {
  error?: boolean
}

export type HelperTextProps = {
  error?: boolean
}

export type TextFieldProps = {
  helperText?: string
  error?: boolean
} & InputProps
