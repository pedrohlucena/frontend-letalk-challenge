import { PropsWithChildren } from 'react'

type Severity = 'success'

export type AlertProps = {
  severity: Severity
} & PropsWithChildren

export type AlertContainerProps = {
  severity: Severity
}
