import { ScaleLinear, ScaleBand } from 'd3-scale'

import { DataPoint } from '../visualization/DataPoint'
import { ChartDimensions } from '../visualization/Dimensions'

export type UseScales = (
  props: UseScalesProps,
  options?: UseScalesOptions
) => UseScalesReturn

export type ScaleY = ScaleLinear<number, number>
export type ScaleX = ScaleBand<string>

export type UseScalesReturn = {
  x: ScaleX
  y: ScaleY
}
type UseScalesProps = {
  data: DataPoint[]
  graph: ChartDimensions['graph']
}
export type UseScalesOptions = {
  includeZero?: boolean
  yRange?: [number | undefined, number | undefined]
  padding?: number // between 0 (= no padding) and 1 (= all padding, no width)
  paddingInner?: number // between 0 (= no padding) and 1 (= all padding, no width)
  paddingOuter?: number // between 0 (= no padding) and 1 (= all padding, no width)
}
