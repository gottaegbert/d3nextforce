/* eslint-disable max-lines-per-function */
/* eslint-disable no-magic-numbers */
import React, { FC } from 'react'
import 'd3-transition'

import { useChartDimensions } from '../../hooks/useChartDimensions'
import { useScales } from '../../hooks/useScales'
import { DataPoint } from '../../types/visualization/DataPoint'

import { BarChart } from './BarChart/BarChart'
import { GroupGraph } from './SVGChartContainer/GroupGraph'
import { SVGChartContainer } from './SVGChartContainer/SVGChartContainer'
import styles from './TestChart.module.css'

const data: DataPoint[] = [
  ['x', 50],
  ['a', 10],
  ['b', 90],
  ['c', 60],
  ['d', 110],
  ['e', 20],
  ['f', 80],
  ['g', 100],
  ['h', 5],
  ['i', 80],
  ['j', 10],
  ['k', 50],
]

const margins = { bottom: 20, left: 25, right: 10, top: 10 }
const options = { includeZero: true, paddingInner: 0.5, paddingOuter: 0.5 }

export const TestChart: FC = () => {
  const { ref, chartDimensions } = useChartDimensions({ margins })
  const { graph } = chartDimensions
  const scales = useScales({ data, graph }, options)
  return (
    <>
      <SVGChartContainer divRef={ref} className={styles.container}>
        <GroupGraph margins={margins}>
          {/* TODO refactor into wrapper */}
          {!!graph.height && (
            <BarChart data={data} graph={graph} scales={scales} />
          )}
        </GroupGraph>
      </SVGChartContainer>
    </>
  )
}
