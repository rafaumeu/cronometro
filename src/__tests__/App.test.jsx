import App from '../App'
import '@testing-library/jest-dom'
import React from 'react'
import { render } from '@testing-library/react'

describe('Timer component', () => {
  it('should render components', () => {
    const { getByText } = render(<App />)
    expect(getByText('00:00')).toBeInTheDocument()
    expect(getByText('Iniciar')).toBeInTheDocument()
    expect(getByText('Zerar')).toBeInTheDocument()
    expect(getByText('Voltas:')).toBeInTheDocument()
    expect(getByText('Volta 1: 01:05')).toBeInTheDocument()
    expect(getByText('Volta 2: 02:05')).toBeInTheDocument()
  })
})
