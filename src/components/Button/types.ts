import { PropsWithChildren, ButtonHTMLAttributes } from 'react'

type ButtonTheme = 'primary'

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>['type']

export type ButtonProps = {
  theme?: ButtonTheme
  type?: ButtonType
} & PropsWithChildren

export type ButtonContainerProps = { buttonTheme: ButtonTheme }
