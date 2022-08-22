import React from 'react'

import MainArtists from './mainartist/mainartists'
import MainTracks from './maintracks/maintracks'
import MainPlaylists from './mainplaylists/mainplaylists'
import MainPlayed from './mainplayed/mainplayed'

import './body.css'

export default function Body() {
  return (
    <div className='body'>
      <div className='body-title'>
        <div className='body-title-h1'>
          <span>Explore</span>
        </div>
      </div>
      <div className="body-wrapper">
        <div className='body-left'>
          <div className='body-left-playlists'>
            <p>Playlists</p>
            <div className='body-left-playlists-items'>
              <MainPlaylists/>
            </div>
          </div>
          <div className='body-left-topelems'>
            <div className="body-left-topelems-tracks">
              <p>Your Top Tracks (last 6 months)</p>
              <div className='body-left-topelems-tracks-items'>
                <MainTracks/>
              </div>
            </div>
            <div className='body-left-topelems-artists'>
              <p>Your Top Artists (last 6 months)</p>
              <div className='body-left-topelems-artists-items'>
                <MainArtists/>
              </div>
            </div>
          </div>
        </div>
        <div className='body-right'>
          <p>Recently Played</p>
          <div className='body-right-items'>
            <MainPlayed/>
          </div>
        </div>
      </div>
    </div>
  )
}
