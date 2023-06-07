import { UseScalesOptions } from '../../types/hooks/useScales'

import { Extent } from './getExtent'

export const getExtentWithOptions = (
  extent: Extent,
  options: UseScalesOptions
): Extent => {
  const _extent: Extent = [...extent]
  const { includeZero, yRange } = options

  if (yRange) {
    if (typeof yRange[xIndex] !== 'undefined') {
      _extent[xIndex] = yRange[xIndex]
    }
    if (typeof yRange[yIndex] !== 'undefined') {
      _extent[yIndex] = yRange[yIndex]
    }
  }

  if (includeZero) {
    _extent[xIndex] = 0
  }

  return _extent
}
const xIndex = 0
const yIndex = 1
