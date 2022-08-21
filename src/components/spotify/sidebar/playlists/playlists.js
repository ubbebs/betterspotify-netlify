import React, { useEffect } from 'react'
import { useStateProvider } from '../../../../utils/StateProvider'
import { reducerCases } from '../../../../utils/Constants'
import Axios from 'axios'

import './playlists.css'

export default function Playlists() {
    const [{ token, playlists }, dispatch] = useStateProvider();
    useEffect(() => {
        const getPlaylistData = async () => {
            const response = await Axios.get('https://api.spotify.com/v1/me/playlists', {
                headers: {
                    Authorization: 'Bearer ' + token,
                    'Content-Type': 'application/json',
                },
            })
            const { items } = response.data
            const playlists = items.map(({ name, id }) => {
                return { name, id }
            })
            dispatch({ type: reducerCases.SET_PLAYLISTS, playlists })
        }
        getPlaylistData()
    }, [token, dispatch])
    return (
        <div className='playlists'>
            <p>PLAYLISTS</p>
            <ul>
                { 
                    playlists.map(({ name, id }) => {
                        return <li key={ id }>{ name }</li>
                    })
                }
            </ul>
        </div>
    )
}
