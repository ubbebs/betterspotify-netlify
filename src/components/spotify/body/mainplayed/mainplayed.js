import React, { useEffect } from 'react'
import { useStateProvider } from '../../../../utils/StateProvider'
import { reducerCases } from '../../../../utils/Constants'
import Axios from 'axios'

import './mainplayed.css'

export default function MainPlayed() {
  const [{ token, recentlyPlayed }, dispatch ] = useStateProvider();
  useEffect(() => {
    const getRecentlyPlayed = async () => {
      const recentlyPlayedData = await Axios.get('https://api.spotify.com/v1/me/player/recently-played', {
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json',
        }
      })
      const items = recentlyPlayedData.data.items.slice(0,6)
      const recentlyPlayed = items.map(({ track, context }) => {
          return { track, context }
      })
      dispatch({ type: reducerCases.SET_RECENTLYPLAYED, recentlyPlayed })
    }
    getRecentlyPlayed()
  }, [token, dispatch])
  return (
    recentlyPlayed.map(({ track }) => {
      return (
        <div className='mainplayed' key={track.id}>
          <div className='mainplayed-img'>
            <img src={track.album.images[0].url} alt="Track's cover" />
          </div>
          <div className='mainplayed-name'>
            <span>{track.name}</span>
            <p>{track.artists[0].name}</p>
          </div>
        </div>
      )
    })
  )
}
