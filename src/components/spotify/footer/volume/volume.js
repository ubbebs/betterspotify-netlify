import React from 'react'
import { useStateProvider } from '../../../../utils/StateProvider'
import Axios from 'axios'


import { GoMute } from 'react-icons/go'

import './volume.css'

export default function Volume() {
    const [{ token }] = useStateProvider();
    const setVolume = async (e) => {
        await Axios.put('https://api.spotify.com/v1/me/player/volume',{}, {
            params: {
                volume_percent: parseInt(e.target.value)
            },
            headers: {
                Authorization: 'Bearer ' + token,
                'Content-Type': 'application/json',
            }
        })
    }
    const mute = async () => {
        await Axios.put('https://api.spotify.com/v1/me/player/volume',{}, {
            params: {
                volume_percent: 0
            },
            headers: {
                Authorization: 'Bearer ' + token,
                'Content-Type': 'application/json',
            }
        })
    }
    return (
        <div className='volume'>
            <GoMute onClick={mute}/>
            <input type='range' class='volume-input' min={0} max={100} onMouseUp={(e) => setVolume(e)} />
        </div>
    )
}
