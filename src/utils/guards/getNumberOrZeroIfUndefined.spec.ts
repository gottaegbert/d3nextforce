/* eslint-disable no-magic-numbers */
import { getNumberOrZeroIfUndefined } from './getNumberOrZeroIfUndefined'

describe('getZeroIfUndefined()', () => {
  test.concurrent.each([
    [1, 1],
    [null, 0],
    [undefined, 0],
  ])('Then getNumberOrZeroIfUndefined(%p) => %p', async (number, expected) => {
    expect(getNumberOrZeroIfUndefined(number)).toStrictEqual(expected)
  })
})
