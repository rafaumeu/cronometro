import React from 'react'
import PropTypes from 'prop-types'
const TimerDisplay = ({ time }) => {
  return <div className='timer-display'>{time}</div>
}

TimerDisplay.propTypes = {
  time: PropTypes.string.isRequired,
}
export default TimerDisplay
