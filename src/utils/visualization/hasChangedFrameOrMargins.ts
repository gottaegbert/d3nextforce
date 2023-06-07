import {
  ChartDimensions,
  Dimensions,
  Margins,
} from '../../types/visualization/Dimensions'

export const hasChangedFrameOrMargins = ({
  chartDimensions,
  frame,
  margins,
}: {
  chartDimensions: ChartDimensions
  frame: Dimensions
  margins: Margins
}): boolean => {
  return (
    !Object.is(frame, chartDimensions.frame) ||
    !Object.is(margins, chartDimensions.margins)
  )
}
