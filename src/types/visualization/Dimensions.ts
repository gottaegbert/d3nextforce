export type ChartDimensions = {
  frame: Dimensions
  graph: Dimensions
  margins: Margins
}

export const dimensions = ['height', 'width'] as const
export type Dimensions = Record<typeof dimensions[number], number>

export type Margins = {
  bottom: number
  left: number
  right: number
  top: number
}
