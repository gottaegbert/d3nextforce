import { scaleLinear, scaleBand } from 'd3-scale'

import { UseScales } from '../types/hooks/useScales'
import { getXValues as getXRange } from '../utils/dataPoint/getXValues'
import { getYRange } from '../utils/dataPoint/getYRange'

export const useScales: UseScales = ({ data, graph }, options) => {
  const { height, width } = graph

  // x
  const xRange = getXRange(data)
  const xDomain = [scaleStart, width]
  const paddingInner = options?.paddingInner ?? defaultPaddingInner
  const paddingOuter = options?.paddingOuter ?? defaultPaddingOuter
  const x = scaleBand(xRange, xDomain)
    .paddingInner(paddingInner)
    .paddingOuter(paddingOuter)

  // y
  const yRange = getYRange(data, options)
  const yDomain = [height, scaleStart]
  const y = scaleLinear(yRange, yDomain)

  return { x, y }
}

const defaultPaddingInner = 0.2
const defaultPaddingOuter = 0.2
const scaleStart = 0
