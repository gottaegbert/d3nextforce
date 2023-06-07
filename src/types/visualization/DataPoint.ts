import { ReactElement, JSXElementConstructor } from 'react'

export type DataPoint = [string, number]

export type ChildWithDataPointProps = ReactElement<
  { data: DataPoint[] },
  string | JSXElementConstructor<unknown>
>
