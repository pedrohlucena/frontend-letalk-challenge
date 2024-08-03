import { PropsWithChildren, ButtonHTMLAttributes } from 'react'

type ButtonTheme = 'primary' | 'secondary'

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>['type']

export type ButtonProps = {
  theme?: ButtonTheme
  type?: ButtonType
  disabled?: boolean
} & PropsWithChildren

export type ButtonContainerProps = { buttonTheme: ButtonTheme }
