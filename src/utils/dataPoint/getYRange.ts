import { GetYRange } from '../../types/utils/getYRange'

import { getExtent } from './getExtent'
import { getExtentWithOptions } from './getExtentWithOptions'
import { getYValues } from './getYValues'

export const getYRange: GetYRange = (data, options) => {
  const extent = getExtent(getYValues(data))
  if (options) {
    return getExtentWithOptions(extent, options)
  }
  return extent
}
