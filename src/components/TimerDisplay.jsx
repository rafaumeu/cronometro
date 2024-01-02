import React from 'react'

const TimerDisplay = ({ time }) => {
  return <div className='timer-display'>{time}</div>
}

TimerDisplay.propTypes = {
  time: PropTypes.string.isRequired,
}
export default TimerDisplay
