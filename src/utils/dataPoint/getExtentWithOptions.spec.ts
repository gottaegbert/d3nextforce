/* eslint-disable max-lines-per-function */
/* eslint-disable no-magic-numbers */
import { UseScalesOptions } from '../../types/hooks/useScales'

import { Extent } from './getExtent'
import { getExtentWithOptions } from './getExtentWithOptions'

describe('getExtentWithOptions()', () => {
  const extentDefault: Extent = [0, 1]
  const optionsDefault: UseScalesOptions = {}
  const extentNonZero: Extent = [100, 1000]
  const optionsIncludeZero: UseScalesOptions = { includeZero: true }
  const optionsYRange: UseScalesOptions = { yRange: [50, 5000] }
  const optionsYRangeOnlyX: UseScalesOptions = { yRange: [50, undefined] }
  const optionsYRangeOnlyY: UseScalesOptions = { yRange: [undefined, 5000] }
  const optionsBoth: UseScalesOptions = {
    includeZero: true,
    yRange: [50, 1000],
  }
  test.concurrent.each([
    [extentDefault, optionsDefault, extentDefault],
    [extentNonZero, optionsDefault, extentNonZero],
    [extentNonZero, optionsIncludeZero, [0, extentNonZero[1]]],
    [extentNonZero, optionsYRange, optionsYRange.yRange],
    [
      extentNonZero,
      optionsYRangeOnlyX,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      [optionsYRange.yRange[0], extentNonZero[1]],
    ],
    [
      extentNonZero,
      optionsYRangeOnlyY,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      [extentNonZero[0], optionsYRange.yRange[1]],
    ],
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    [extentNonZero, optionsBoth, [0, optionsBoth.yRange[1]]],
  ])(
    'isNotOrEmptyArray(extent: %p, options: %p) => %p',
    async (extent, options, expected) => {
      expect(getExtentWithOptions(extent, options)).toStrictEqual(expected)
    }
  )
})
