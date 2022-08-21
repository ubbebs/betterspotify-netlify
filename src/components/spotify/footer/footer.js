import React from 'react'

import CurrentTrack from './currenttrack/currenttrack.js'
import PlayerControls from './playercontrols/playercontrols.js'
import Volume from './volume/volume.js'

import './footer.css'

export default function Footer() {
  return (
    <div className='footer'>
      <CurrentTrack />
      <PlayerControls />
      <Volume />
    </div>
  )
}
