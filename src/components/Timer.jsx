import React from 'react'
import TimerDisplay from './TimerDisplay'
import TimerControls from './TimerControls'
import LapList from './LapList'

const Timer = () => {
  return (
    <div className='timer-container'>
      <TimerDisplay />
      <TimerControls />
      <LapList />
    </div>
  )
}

export default Timer
