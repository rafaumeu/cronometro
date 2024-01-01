import App from '../App'
import '@testing-library/jest-dom'
import React from 'react'
import { render } from '@testing-library/react'

describe('Timer component', () => {
  it('should render components', () => {
    const { getByText } = render(<App />)
    expect(getByText('TimerDisplay')).toBeInTheDocument()
    expect(getByText('TimerControls')).toBeInTheDocument()
    expect(getByText('LapList')).toBeInTheDocument()
  })
})
