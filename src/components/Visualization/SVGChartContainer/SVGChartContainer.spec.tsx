/* eslint-disable max-lines-per-function */
/* eslint-disable no-magic-numbers */
import { render, screen } from '@testing-library/react'
import React, {
  cloneElement,
  FC,
  JSXElementConstructor,
  ReactElement,
  RefObject,
} from 'react'
import '@testing-library/jest-dom'

import { useChartDimensions } from '../../../hooks/useChartDimensions'

import { SVGChartContainer } from './SVGChartContainer'

const MockChart: FC<{
  children: ReactElement<
    { divRef: RefObject<HTMLDivElement> },
    string | JSXElementConstructor<unknown>
  >
}> = ({ children }) => {
  const { ref: divRef } = useChartDimensions()

  return <>{cloneElement(children, { divRef })}</>
}

describe('SVGChartContainer', () => {
  describe('renders div and svg elements correctly', () => {
    it('testing implementation / without browser', () => {
      render(
        <MockChart>
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/* @ts-ignore */}
          <SVGChartContainer style={{ height: '300px', width: '300px' }}>
            <g></g>
          </SVGChartContainer>
        </MockChart>
      )

      // div
      const div = screen.getByTestId('divChartContainer')
      const divStyle = window.getComputedStyle(div)

      expect(divStyle.width).toBe('300px')
      expect(divStyle.height).toBe('300px')

      // svg
      const svg = screen.getByTestId('svgChart')
      const svgStyle = window.getComputedStyle(svg)

      expect(svgStyle.display).toBe('block')
      expect(svg.getAttribute('width')).toBe('100%')
      expect(svg.getAttribute('height')).toBe('100%')
    })
  })
})
