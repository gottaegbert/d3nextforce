import { isNotOrEmptyArray } from './isNotOrEmptyArray'

describe('isNotOrEmptyArray()', () => {
  test.concurrent.each([
    [[], true],
    [undefined, true],
    [null, true],
    [NaN, true],
    ['string', true],
    [[undefined], false],
    [['a'], false],
  ])('isNotOrEmptyArray(%p) => %p', async (array, expected) => {
    expect(isNotOrEmptyArray(array)).toStrictEqual(expected)
  })
})
