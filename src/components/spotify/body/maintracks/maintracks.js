import React, { useEffect } from 'react'
import { useStateProvider } from '../../../../utils/StateProvider'
import { reducerCases } from '../../../../utils/Constants'
import Axios from 'axios'

import './maintracks.css'

export default function MainTracks() {
  const [{ token, tracks }, dispatch ] = useStateProvider();
  useEffect(() => {
    const getUserTracks = async () => {
      const tracksData = await Axios.get('https://api.spotify.com/v1/me/top/tracks', {
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json',
        }
      })
      const items = tracksData.data.items.slice(0,3)
      const tracks = items.map(({ id, name, artists, album }) => {
        return { id, name, artists, album }
      })
      dispatch({ type: reducerCases.SET_TRACKS, tracks})
    }
    getUserTracks()
  }, [token, dispatch])
  return (
    tracks.map(({ name, id, artists, album }) => {
      const background = {
        backgroundImage: `url("${album.images[1].url}")`
      }
      return (
        <div className='maintracks' key={id}>
          <div className='maintracks-img' style={background}>
          </div>
          <div className='maintracks-name'>
            <span>{name}</span>
            <p>{artists[0].name}</p>
          </div>
        </div>
      )
    })
  )
}
