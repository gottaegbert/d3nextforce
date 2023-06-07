import { ScaleLinear } from 'd3-scale'

export const getGraphHeightFromYScale = (
  scale: ScaleLinear<number, number>
): number => {
  return scale.range()[rangeHeightIndex]
}
const rangeHeightIndex = 0
