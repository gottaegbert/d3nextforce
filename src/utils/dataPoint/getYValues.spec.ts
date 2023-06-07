/* eslint-disable no-magic-numbers */
import { DataPoint } from '../../types/visualization/DataPoint'

import { getYValues } from './getYValues'

describe('getYValues()', () => {
  const emptyData: DataPoint[] = []
  const emptyDataExpected: unknown[] = []
  const testData: DataPoint[] = [
    ['a', 1],
    ['b', 2],
  ]
  const testDataExpected = [1, 2]

  test.concurrent.each([
    [emptyData, emptyDataExpected],
    [testData, testDataExpected],
  ])('getExtent(%p) => %p', async (array, expected) => {
    expect(getYValues(array)).toStrictEqual(expected)
  })
})
