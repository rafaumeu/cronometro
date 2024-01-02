import React from 'react'
import PropTypes from 'prop-types'
const LapList = ({ laps }) => {
  return (
    <div className='timer-laps'>
      <h3>Voltas:</h3>
      <ul>
        {laps.map((lap, index) => (
          <li key={index}>
            Volta {index + 1}: {lap}
          </li>
        ))}
      </ul>
    </div>
  )
}
LapList.propTypes = {
  laps: PropTypes.arrayOf(PropTypes.string).isRequired,
}
export default LapList
