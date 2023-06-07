import { dataPointYIndex } from '../../components/Visualization/BarChart/BarChart'
import { ScaleY } from '../../types/hooks/useScales'
import { DataPoint } from '../../types/visualization/DataPoint'
import { getNumberOrZeroIfUndefined } from '../guards/getNumberOrZeroIfUndefined'

export const getY = (d: DataPoint, scale: ScaleY): number => {
  return getNumberOrZeroIfUndefined(scale(d[dataPointYIndex]))
}
