import { PropsWithChildren } from 'react'

export type RowContainerProps = {
  gridSystem?: string
}

export type RowProps = PropsWithChildren & RowContainerProps
