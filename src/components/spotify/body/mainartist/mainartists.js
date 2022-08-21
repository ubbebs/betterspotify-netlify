import React, { useEffect } from 'react'
import { useStateProvider } from '../../../../utils/StateProvider'
import { reducerCases } from '../../../../utils/Constants'
import Axios from 'axios'

import './mainartists.css'

export default function MainArtists() {
    const [{ token, artists }, dispatch ] = useStateProvider()
    useEffect(() => {
      const getUserArtists = async () => {
        const artistsData = await Axios.get('https://api.spotify.com/v1/me/top/artists', {
          headers: {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/json',
          }
        })
        const items = artistsData.data.items.slice(0,4)
        const artists = items.map(({ id, name, images }) => {
          return { id, name, images }
        })
        dispatch({ type: reducerCases.SET_ARTISTS, artists })
      }
      getUserArtists()
    }, [token, dispatch])
    return (
      artists.map(({ id, name, images }) => {
        return (
          <div className='mainartists' key={id}>
            <div className='mainartists-img'>
              <img src={images[0].url} alt="Artist's cover" />
            </div>
            <div className='mainartists-name'>
              <span>{name}</span>
            </div>
          </div>
        )
      })
    )
  }
