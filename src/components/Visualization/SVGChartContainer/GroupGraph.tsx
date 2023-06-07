import React, { SVGAttributes } from 'react'

import { FCC } from '../../../types/FCC'
import { ChartDimensions } from '../../../types/visualization/Dimensions'

export const GroupGraph: FCC<
  { margins: ChartDimensions['margins'] } & SVGAttributes<SVGGElement>
> = ({ children, margins, ...gAttributes }) => {
  return (
    <g
      {...gAttributes}
      transform={`translate(${margins.left}, ${margins.top})`}
      data-testid="groupGraph"
    >
      {children}
    </g>
  )
}
