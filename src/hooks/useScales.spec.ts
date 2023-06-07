import { dataTest } from '../tests/common/dataTest'
import { graphTest } from '../tests/common/graphTest'

import { useScales } from './useScales'

describe('useScales()', () => {
  it('without passing options includes default padding', () => {
    const scales = useScales({ data: dataTest, graph: graphTest })
    const expectedForB = 28.57142857142857

    expect(scales.x('b')).toBe(expectedForB)
  })
})
