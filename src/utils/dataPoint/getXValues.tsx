import { DataPoint } from '../../types/visualization/DataPoint'

export const getXValues = (data: DataPoint[]): string[] => {
  return data.map(([x]) => x)
}
