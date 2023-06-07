/* eslint-disable no-magic-numbers */
import { marginsTest } from '../../tests/common/marginsTest'
import {
  ChartDimensions,
  Dimensions,
  Margins,
} from '../../types/visualization/Dimensions'

import { getUpdatedChartDimensions } from './getUpdatedChartDimensions'
const prev: ChartDimensions = {
  frame: { height: 0, width: 0 },
  graph: { height: 0, width: 0 },
  margins: marginsTest,
}
const margins: Margins = marginsTest

describe('getUpdatedChartDimensions()', () => {
  const frames: Dimensions[] = [
    { height: 300, width: 300 },
    { height: 0, width: 0 },
  ]

  const graphs: Dimensions[] = [
    { height: 240, width: 240 },
    { height: -60, width: -60 },
  ]
  const expected: ChartDimensions[] = [
    { frame: frames[0], margins, graph: graphs[0] },
    { frame: frames[1], margins, graph: graphs[1] },
  ]

  test.concurrent.each([
    [{ prev, frame: frames[0], margins }, expected[0]],
    [{ prev, frame: frames[1], margins }, expected[1]],
  ])('Then getUpdatedChartDimensions(%p) => %p', async (obj, expected) => {
    expect(getUpdatedChartDimensions(obj)).toStrictEqual(expected)
  })
})
