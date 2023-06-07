import React, { HTMLAttributes, RefObject, SVGProps } from 'react'

import { FCC } from '../../../types/FCC'

import styles from './SVGChartContainer.module.css'

export const SVGChartContainer: FCC<
  {
    divRef: RefObject<HTMLDivElement>
  } & HTMLAttributes<HTMLDivElement>
> = ({ children, className, divRef, ...divAttributes }) => {
  return (
    <div
      {...divAttributes}
      className={`${styles.container} ${className}`}
      ref={divRef}
      data-testid="divChartContainer"
    >
      <svg
        {...svgDefinition}
        width="100%"
        height="100%"
        style={{ display: 'block' }}
        data-testid="svgChart"
      >
        {children}
      </svg>
    </div>
  )
}

const svgDefinition: SVGProps<SVGSVGElement> = {
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
  xmlSpace: 'preserve',
  preserveAspectRatio: 'none',
}
