/* eslint-disable no-magic-numbers */
import { DataPoint } from '../../types/visualization/DataPoint'

import { getXValues } from './getXValues'

describe('getXValues()', () => {
  const emptyData: DataPoint[] = []
  const emptyDataExpected: unknown[] = []
  const testData: DataPoint[] = [
    ['a', 1],
    ['b', 2],
  ]
  const testDataExpected = ['a', 'b']
  test.concurrent.each([
    [emptyData, emptyDataExpected],
    [testData, testDataExpected],
  ])('getXValues(%p) => %p', async (array, expected) => {
    expect(getXValues(array)).toStrictEqual(expected)
  })
})
