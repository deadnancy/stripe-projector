import React from 'react'
import PropTypes from 'prop-types'

const SettingsIcon = ({ fill, stroke }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
    <path fill={fill} stroke={stroke} strokeMiterlimit="10" d="M20.04,8.55l2-3.33c-0.65-0.85-1.41-1.61-2.25-2.25l-3.33,2 C16,4.73,15.53,4.53,15.03,4.37l-0.94-3.76C13.57,0.54,13.04,0.5,12.5,0.5c-0.54,0-1.07,0.04-1.59,0.11L9.96,4.37 C9.47,4.53,9,4.73,8.55,4.96l-3.33-2c-0.85,0.65-1.6,1.4-2.25,2.25l2,3.33C4.73,9,4.53,9.47,4.37,9.97l-3.76,0.94 C0.54,11.43,0.5,11.96,0.5,12.5c0,0.54,0.04,1.07,0.11,1.59l3.76,0.94c0.15,0.5,0.35,0.97,0.59,1.42l-2,3.33 c0.65,0.85,1.4,1.6,2.25,2.25l3.33-2c0.45,0.24,0.93,0.44,1.42,0.59l0.94,3.76c0.52,0.07,1.05,0.11,1.59,0.11 c0.54,0,1.07-0.04,1.59-0.11l0.94-3.76c0.49-0.15,0.97-0.35,1.42-0.59l3.33,2c0.85-0.65,1.61-1.41,2.25-2.25l-2-3.33 c0.24-0.45,0.44-0.93,0.59-1.42l3.76-0.94c0.07-0.52,0.11-1.05,0.11-1.59c0-0.54-0.04-1.07-0.11-1.59l-3.76-0.94 C20.47,9.47,20.27,9,20.04,8.55z M12.5,17.08c-2.53,0-4.58-2.05-4.58-4.58s2.05-4.58,4.58-4.58c2.53,0,4.58,2.05,4.58,4.58 S15.03,17.08,12.5,17.08z" />
  </svg>
)

SettingsIcon.propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string
}

SettingsIcon.defaultProps = {
  fill: '#000',
  stroke: '#000'
}

export default SettingsIcon
