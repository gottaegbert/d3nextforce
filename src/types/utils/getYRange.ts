import { UseScalesOptions } from '../hooks/useScales'
import { DataPoint } from '../visualization/DataPoint'

export type GetYRange = (
  props: DataPoint[],
  options?: UseScalesOptions
) => [] | [number, number]
