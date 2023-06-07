/* eslint-disable max-lines-per-function */
/* eslint-disable no-magic-numbers */
import { render, screen } from '@testing-library/react'
import React from 'react'

import '@testing-library/jest-dom'

import { marginsTest } from '../../../tests/common/marginsTest'

import { GroupGraph } from './GroupGraph'

describe('GroupGraph', () => {
  it('renders the correct margins', () => {
    render(
      <GroupGraph margins={marginsTest}>
        <g></g>
      </GroupGraph>
    )

    const group = screen.getByTestId('groupGraph')

    expect(group.getAttribute('transform')).toBe(
      `translate(${marginsTest.left}, ${marginsTest.top})`
    )
  })
})
