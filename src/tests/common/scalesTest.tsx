import { useScales } from '../../hooks/useScales'

import { dataTest } from './dataTest'
import { graphTest } from './graphTest'
import { optionsScalesTest } from './optionsScalesTest'

// eslint-disable-next-line react-hooks/rules-of-hooks
export const scalesTest = useScales(
  { data: dataTest, graph: graphTest },
  optionsScalesTest
)
