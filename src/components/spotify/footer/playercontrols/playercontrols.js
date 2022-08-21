import React, { useEffect } from 'react'
import { useStateProvider } from '../../../../utils/StateProvider'
import { reducerCases } from '../../../../utils/Constants'
import Axios from 'axios'

import { BsPlayCircle, BsPauseCircle } from 'react-icons/bs'
import { IoIosShuffle, IoIosRepeat } from 'react-icons/io'
import { CgPlayTrackNext, CgPlayTrackPrev } from 'react-icons/cg'

import './playercontrols.css'

export default function PlayerControls() {
    const [{ token, playerState, currentlyPlaying }, dispatch] = useStateProvider();
    const changeTrack = async (type) => {
        await Axios.post(`https://api.spotify.com/v1/me/player/${type}`,{}, {
            headers: {
                Authorization: 'Bearer ' + token,
                'Content-Type': 'application/json',
            },
        })
        const response = await Axios.get('https://api.spotify.com/v1/me/player/currently-playing', {
            headers: {
                Authorization: 'Bearer ' + token,
                'Content-Type': 'application/json',
            },
        })
        if (response.data !== '') {   
            const items = response.data.item
            const currentlyPlaying = {
                id: items.id,
                name: items.name,
                artists: items.artists.map((artist) => artist.name),
                image: items.album.images[1].url,
            }
            dispatch({ type: reducerCases.SET_PLAYING, currentlyPlaying })
            dispatch({ type: reducerCases.SET_PLAYER_STATE, playerState: true })
        } else {
            dispatch({ type: reducerCases.SET_PLAYING, currentlyPlaying: null })
        }
    }

    const changeState = async () => {
        const state = playerState ? "pause" : "play";
        const playpause = await Axios.put(`https://api.spotify.com/v1/me/player/${state} `,{}, {
            headers: {
                Authorization: 'Bearer ' + token,
                'Content-Type': 'application/json',
            },
        })
        dispatch({ type: reducerCases.SET_PLAYER_STATE, playerState: !playerState })
    }
    return (
        <>
            {
                currentlyPlaying && (
                    <div className="playercontrols">
                        <div className="shuffle">
                            <IoIosShuffle />
                        </div>
                        <div className="previous" onClick={() => changeTrack('previous')}>
                            <CgPlayTrackPrev />
                        </div>
                        <div className="state">
                            { playerState ? <BsPauseCircle onClick={changeState} /> : <BsPlayCircle onClick={changeState} />}
                        </div>
                        <div className="next" onClick={() => changeTrack('next')}>
                            <CgPlayTrackNext />
                        </div>
                        <div className="repeat">
                            <IoIosRepeat />
                        </div>
                    </div>
                )
            }
        </>
        
    )
}
