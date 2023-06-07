/* eslint-disable no-magic-numbers */
import { getExtent } from './getExtent'

const expectedEmpty = 0
describe('getExtent()', () => {
  describe('Given array is empty', () => {
    it('Then it returns an empty array', () => {
      expect(getExtent([]).length).toBe(expectedEmpty)
    })
  })
  describe('Given array is non-empty', () => {
    test.concurrent.each([
      [
        [0, 1, 2, 5],
        [0, 5],
      ],
      [
        [-1, 500.005, 6],
        [-1, 500.005],
      ],
      [
        [NaN, 0, -Infinity, Infinity],
        [-Infinity, Infinity],
      ],
    ])('getExtent(%p) => %p', async (array, expected) => {
      expect(getExtent(array)).toStrictEqual(expected)
    })
  })
})
