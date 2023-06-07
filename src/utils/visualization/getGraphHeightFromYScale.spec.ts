/* eslint-disable no-magic-numbers */
import { scaleLinear } from 'd3-scale'

import { getGraphHeightFromYScale } from './getGraphHeightFromYScale'

describe('getGraphHeightFromYScale()', () => {
  it('calls the scale internally and returns the correct height', () => {
    const domainStart = 0
    const domainEnd = 1
    const graphHeight = 100
    const graphMin = 0
    const mockScale = scaleLinear(
      [domainStart, domainEnd],
      [graphHeight, graphMin]
    )

    const result = getGraphHeightFromYScale(mockScale)

    expect(result).toBe(graphHeight)
  })
})
