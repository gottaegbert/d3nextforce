import { RefObject } from 'react'

import { Margins, ChartDimensions } from '../visualization/Dimensions'

type UseChartDimensionsProps = {
  margins?: Margins
}

export type UseChartDimensions = (
  props?: UseChartDimensionsProps
) => {
  ref: RefObject<HTMLDivElement>
  chartDimensions: ChartDimensions
}
