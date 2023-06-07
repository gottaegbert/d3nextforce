import { useEffect, useState } from 'react'

import { UseChartDimensions } from '../types/hooks/useChartDimensions'
import { ChartDimensions } from '../types/visualization/Dimensions'
import { getUpdatedChartDimensions } from '../utils/visualization/getUpdatedChartDimensions'
import { hasChangedFrameOrMargins } from '../utils/visualization/hasChangedFrameOrMargins'

import {
  defaultDimensions,
  useDebouncedDimensions,
} from './useDebouncedDimensions'

export const useChartDimensions: UseChartDimensions = (
  props = defaultProps
) => {
  const margins = props.margins ?? defaultMargins
  const { ref, dimensions: frame } = useDebouncedDimensions()
  const [chartDimensions, setChartDimensions] = useState<ChartDimensions>({
    ...defaultChartDimensions,
    margins,
  })

  useEffect(() => {
    if (hasChangedFrameOrMargins({ chartDimensions, frame, margins })) {
      setChartDimensions(prev => {
        return getUpdatedChartDimensions({ prev, frame, margins })
      })
    }
  }, [chartDimensions, frame, margins])

  return { ref, chartDimensions }
}

const defaultMargins = {
  bottom: 10,
  left: 10,
  right: 10,
  top: 10,
}

const defaultProps = { margins: defaultMargins }

const defaultChartDimensions: ChartDimensions = {
  frame: defaultDimensions,
  margins: defaultMargins,
  graph: defaultDimensions,
}
