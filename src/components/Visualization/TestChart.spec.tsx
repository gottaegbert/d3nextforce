/* eslint-disable max-lines-per-function */
/* eslint-disable no-magic-numbers */
import { render, screen } from '@testing-library/react'
import React from 'react'

import '@testing-library/jest-dom'
import { TestChart } from './TestChart'

describe('TestChart', () => {
  it('integrates the trendline', async () => {
    render(<TestChart />)

    const trendline = screen.getByTestId('trendline')

    expect(trendline.getAttribute('d')).toBe(
      'M0,0C0,0,0,0,0,0C0,0,0,0,0,0C0,0,0,0,0,0C0,0,0,0,0,0C0,0,0,0,0,0C0,0,0,0,0,0C0,0,0,0,0,0C0,0,0,0,0,0C0,0,0,0,0,0C0,0,0,0,0,0C0,0,0,0,0,0'
    )
  })
})
