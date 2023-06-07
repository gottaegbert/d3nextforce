import { DataPoint } from '../../types/visualization/DataPoint'

export const getYValues = (data: DataPoint[]): number[] => {
  return data.map(([, y]) => y)
}
