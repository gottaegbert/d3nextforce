/* eslint-disable max-lines-per-function */
import { axisLeft, axisBottom } from 'd3-axis'
import { Selection, BaseType, EnterElement, select } from 'd3-selection'
import { Transition } from 'd3-transition'
import React, { useEffect, FC } from 'react'

import { ScaleY, UseScalesReturn } from '../../../types/hooks/useScales'
import { DataPoint } from '../../../types/visualization/DataPoint'
import { Dimensions } from '../../../types/visualization/Dimensions'
import { getHeight } from '../../../utils/visualization/getHeight'
import { getX } from '../../../utils/visualization/getX'
import { getY } from '../../../utils/visualization/getY'

import styles from './BarChart.module.css'

export const BarChart: FC<{
  data: DataPoint[]
  graph: Dimensions
  scales: UseScalesReturn
}> = ({ data, graph, scales }) => {
  useEffect(() => {
    createBarChart({ scales, data, graph })
  }, [data, graph, scales])
  return (
    <g id="barChart" className={styles.container}>
      <g id="axisX"></g>
      <g id="axisY"></g>
    </g>
  )
}

export const createBarChart = ({
  scales,
  data,
  graph,
}: {
  scales: UseScalesReturn
  data: DataPoint[]
  graph: Dimensions
}): void => {
  const width = scales.x.bandwidth()
  const chart = select('#barChart')

  chart
    .selectAll<SVGRectElement, DataPoint>('rect')
    .data<DataPoint>(data, d => d[dataPointXIndex])
    .join(
      enter => joinEnter(enter, graph, scales.y),
      update => joinUpdate(update, scales.y)
    )

    .attr('x', d => getX(d, scales.x))
    .attr('width', () => width)

  createAxis({ chart, scales, graph })
}

const joinEnter = (
  enter: Selection<EnterElement, DataPoint, BaseType, unknown>,
  graph: Dimensions,
  scale: ScaleY
): Transition<SVGRectElement, DataPoint, BaseType, unknown> => {
  return enter
    .append('rect')
    .attr('y', graph.height)
    .attr('height', heightInitial)
    .transition()
    .duration(transitionDuration)
    .attr('y', d => getY(d, scale))
    .attr('height', d => getHeight(d, scale))
}

const joinUpdate = (
  update: Selection<SVGRectElement, DataPoint, BaseType, unknown>,
  scale: ScaleY
): Transition<SVGRectElement, DataPoint, BaseType, unknown> => {
  return update
    .transition()
    .duration(transitionDuration)
    .attr('y', d => getY(d, scale))
    .attr('height', d => getHeight(d, scale))
    .delay((d, i) => transitionStaggerDelay * i)
}

type SelectionG = Selection<SVGGElement, unknown, BaseType, unknown>

const transitionDuration = 500
export const dataPointYIndex = 1
const transitionStaggerDelay = 50
export const dataPointXIndex = 0
const heightInitial = 0

const createAxis = ({
  chart,
  scales,
  graph,
}: {
  chart: Selection<BaseType, unknown, HTMLElement, unknown>
  scales: UseScalesReturn
  graph: Dimensions
}): void => {
  const axisY = chart.select('#axisY') as SelectionG
  axisY.call(axisLeft(scales.y))

  const axisX = chart.select('#axisX') as SelectionG
  axisX
    .attr('transform', `translate(0,${graph.height})`)
    .call(axisBottom(scales.x))
}
