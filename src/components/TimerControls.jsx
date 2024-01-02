import React from 'react'
import PropTypes from 'prop-types'
const TimerControls = ({ onStart, onStop, timerOn, onReset, onLap }) => {
  return (
    <div className='timer-controls'>
      {!timerOn && <button onClick={onStart}>Iniciar</button>}
      {timerOn && <button onClick={onStop}>Parar</button>}
      {timerOn && <button onClick={onLap}>Volta</button>}
      <button onClick={onReset}>Zerar</button>
    </div>
  )
}

TimerControls.propTypes = {
  onStart: PropTypes.func.isRequired,
  onStop: PropTypes.func.isRequired,
  timerOn: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  onLap: PropTypes.func.isRequired,
}

export default TimerControls
