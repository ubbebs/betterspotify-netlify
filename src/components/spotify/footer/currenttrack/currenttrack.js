import React, { useEffect } from 'react'
import { useStateProvider } from '../../../../utils/StateProvider'
import { reducerCases } from '../../../../utils/Constants'
import Axios from 'axios'

import './currenttrack.css'

export default function CurrentTrack() {
    const [{ token, currentlyPlaying, recentlyPlayed, playerState }, dispatch] = useStateProvider();
    useEffect(() => {
        const getCurrentTrack = async () => {
            const response = await Axios.get('https://api.spotify.com/v1/me/player/currently-playing', {
                headers: {
                    Authorization: 'Bearer ' + token,
                    'Content-Type': 'application/json',
                },
            })
            if (response.data !== '') {   
                const items = response.data.item
                const playing = response.data.is_playing
                const currentlyPlaying = {
                    id: items.id,
                    name: items.name,
                    artists: items.artists.map((artist) => artist.name),
                    image: items.album.images[1].url,
                }
                dispatch({ type: reducerCases.SET_PLAYER_STATE, playerState: playing })
                dispatch({ type: reducerCases.SET_PLAYING, currentlyPlaying })
            }
        }
        getCurrentTrack()
    }, [])
    return (
        <>
            {console.log(currentlyPlaying)}
            {
                currentlyPlaying && (
                    <div className='currenttrack'>
                        <div className='currenttrack-cover'>
                            <img src={currentlyPlaying.image} alt=''/>
                        </div>
                        <div className='currenttrack-info'>
                            <span>{currentlyPlaying.name}</span>
                            <p>{currentlyPlaying.artists.join(", ")}</p>
                        </div>
                    </div>
                )
            }
        </>
    )
}
