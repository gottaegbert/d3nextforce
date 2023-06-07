import { dataPointYIndex } from '../../components/Visualization/BarChart/BarChart'
import { ScaleY } from '../../types/hooks/useScales'
import { DataPoint } from '../../types/visualization/DataPoint'
import { getNumberOrZeroIfUndefined } from '../guards/getNumberOrZeroIfUndefined'

import { getGraphHeightFromYScale } from './getGraphHeightFromYScale'

export const getHeight = (d: DataPoint, scale: ScaleY): number => {
  return getNumberOrZeroIfUndefined(
    getGraphHeightFromYScale(scale) - scale(d[dataPointYIndex])
  )
}
