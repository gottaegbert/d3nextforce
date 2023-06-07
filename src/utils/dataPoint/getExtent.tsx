import { extent } from 'd3-array'

export type Extent = [] | [number, number]

export const getExtent = (nums: number[]): Extent => {
  const extentD3 = extent(nums)
  if (extentD3[indexExtentTest] === undefined) {
    return []
  }
  return extentD3
}
const indexExtentTest = 0
