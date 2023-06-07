import { FC, ReactElement, ReactNode } from 'react'

export type FCC<T = unknown> = FC<
  { children: ReactNode | ReactElement | null } & T
>
