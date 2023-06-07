import {
  ChartDimensions,
  Dimensions,
  Margins,
} from '../../types/visualization/Dimensions'

export const getUpdatedChartDimensions = ({
  frame,
  margins,
  prev,
}: {
  prev: ChartDimensions
  frame: Dimensions
  margins: Margins
}): ChartDimensions => {
  const _dimensions = { ...prev }
  _dimensions.frame = frame
  _dimensions.graph.height = frame.height - (margins.bottom + margins.top)
  _dimensions.graph.width = frame.width - (margins.left + margins.right)
  _dimensions.margins = margins
  return _dimensions
}
