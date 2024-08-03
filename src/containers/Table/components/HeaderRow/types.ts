import { PropsWithChildren } from 'react'

export type HeaderRowContainerProps = {
  gridSystem?: string
}

export type HeaderRowProps = PropsWithChildren & HeaderRowContainerProps
