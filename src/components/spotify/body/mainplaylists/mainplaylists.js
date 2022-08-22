import React, { useEffect } from 'react'
import { useStateProvider } from '../../../../utils/StateProvider'
import { reducerCases } from '../../../../utils/Constants'
import Axios from 'axios'

import './mainplaylists.css'

export default function MainPlaylists() {
  const [{ token, featuredplaylists }, dispatch ] = useStateProvider();
  useEffect(() => {
    const getFeaturedPlaylists = async () => {
      const featuredplaylistsData = await Axios.get('https://api.spotify.com/v1/browse/featured-playlists', {
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json',
        }
      })
      const random = Math.floor(Math.random() * 16)
      const items = featuredplaylistsData.data.playlists.items.slice(random,random+4)
      const featuredplaylists = items.map(({ id, name, images, description }) => {
          return { id, name, images, description }
      })
      dispatch({ type: reducerCases.SET_FEATUREDPLAYLISTS, featuredplaylists })
    }
    getFeaturedPlaylists()
  }, [token, dispatch])
  return (
    featuredplaylists.map(({ id, images }) => {
      const background = {
        backgroundImage: `url("${images[1].url}")`
      }
      return (
        <div className='mainplaylists' key={id} style={background}>
          {/* <div className='mainplaylists-img'>
            <img src={images[0].url} alt="Playlist's cover" />
          </div> */}
        </div>
      )
    })
  )
}
