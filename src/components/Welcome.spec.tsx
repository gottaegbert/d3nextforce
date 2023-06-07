import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'

import { Welcome } from './Welcome'

describe('Welcome', () => {
  it('should include the word /starter/', () => {
    render(<Welcome />)
    expect(screen.getByText(/starter/i)).toBeInTheDocument()
  })
})
