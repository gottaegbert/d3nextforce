import { dataPointXIndex } from '../../components/Visualization/BarChart/BarChart'
import { ScaleX } from '../../types/hooks/useScales'
import { DataPoint } from '../../types/visualization/DataPoint'
import { getNumberOrZeroIfUndefined } from '../guards/getNumberOrZeroIfUndefined'

export const getX = (
  d: DataPoint,
  scale: ScaleX
): string | number | boolean | readonly (string | number)[] | null => {
  return getNumberOrZeroIfUndefined(scale(d[dataPointXIndex]))
}
