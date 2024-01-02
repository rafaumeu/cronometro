import App from '../App'
import '@testing-library/jest-dom'
import React from 'react'
import { fireEvent, render, renderHook, screen } from '@testing-library/react'
import Timer from '../components/Timer'
import { act } from 'react-test-renderer'
beforeEach(() => {
  jest.useFakeTimers()
})
describe('Timer component', () => {
  it('should render components', () => {
    const { getByText } = render(<App />)
    expect(getByText('Iniciar')).toBeInTheDocument()
    expect(getByText('Zerar')).toBeInTheDocument()
    expect(getByText('Voltas:')).toBeInTheDocument()
  })
  it('initial render displays 00:00:00', () => {
    render(<Timer />)
    const initialTime = screen.getByText('00:00:00')
    expect(initialTime).toBeInTheDocument()
  })
  it('start timer updates the time display', async () => {
    render(<Timer />)
    const startButton = screen.getByText('Iniciar')
    fireEvent.click(startButton)

    jest.advanceTimersByTime(1000)

    const displayTime = screen.getByText(/(\d{2}):(\d{2}):(\d{2})/)
    expect(displayTime).toBeInTheDocument()

    const stopButton = screen.getByText('Parar')
    fireEvent.click(stopButton)

    jest.advanceTimersByTime(1000)

    const newDisplayTime = screen.getByText(/(\d{2}):(\d{2}):(\d{2})/)
    expect(newDisplayTime).toBeInTheDocument()
    expect(newDisplayTime).not.toHaveTextContent('00:00:00')
  })
  it('Stop timer stops updating the time display', () => {
    render(<Timer />)

    const startButton = screen.getByText('Iniciar')
    fireEvent.click(startButton)

    jest.advanceTimersByTime(1000)

    const displayTime = screen.getByText(/(\d{2}):(\d{2}):(\d{2})/)
    expect(displayTime).toBeInTheDocument()

    const stopButton = screen.getByText('Parar')
    fireEvent.click(stopButton)

    // Avançar o tempo novamente
    jest.advanceTimersByTime(1000)

    // Verificar se não houve mudança na exibição do tempo após pressionar o botão 'Zerar'
    const newDisplayTime = screen.queryByText(/(\d{2}):(\d{2}):(\d{2})/)
    expect(newDisplayTime).toHaveTextContent('00:01:40')
  })
  it('on click button Zerar timer 00:00:00', () => {
    render(<Timer />)
    const startButton = screen.getByText('Iniciar')
    fireEvent.click(startButton)

    jest.advanceTimersByTime(1000)
    const displayTime = screen.getByText(/(\d{2}):(\d{2}):(\d{2})/)
    expect(displayTime).toBeInTheDocument()

    const clearButton = screen.getByText('Zerar')
    fireEvent.click(clearButton)
    const newDisplayTime = screen.queryByText(/(\d{2}):(\d{2}):(\d{2})/)
    expect(newDisplayTime).toHaveTextContent('00:00:00')
  })
  it('on click button add Lap is added lap', () => {
    render(<Timer />)
    const startButton = screen.getByText('Iniciar')
    fireEvent.click(startButton)

    jest.advanceTimersByTime(1000)
    const displayTime = screen.getByText(/(\d{2}):(\d{2}):(\d{2})/)
    expect(displayTime).toBeInTheDocument()
    const lapButton = screen.getByText('Volta')
    expect(lapButton).toBeInTheDocument()
    fireEvent.click(lapButton)
    const lapList = screen.getByText(/Volta\s\d+:\s\d{2}:\d{2}:\d{2}/)
    expect(lapList).toBeInTheDocument()
  })
})
