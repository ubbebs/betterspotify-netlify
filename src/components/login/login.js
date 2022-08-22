import React from 'react'
import styled from 'styled-components'

import BlackLogo from '../../assets/spotifyblaclogo.png'
import Work from '../../assets/ees.png'
import './login.css'

export default function Login() {
    const handleClick = () => {
        const clientID = "15ba43e0e47d4f73b46eb57180d5b4fd" // 15ba43e0e47d4f73b46eb57180d5b4fd / 7bd2de5233f944d4a6977439871cd12e
        const redirectURL = "https://brilliant-buttercream-87ed41.netlify.app/" // https://brilliant-buttercream-87ed41.netlify.app/ / http://localhost:3000/
        const apiURL = "https://accounts.spotify.com/authorize"
        const scope = [
            'user-read-email',
            'user-read-private',
            'user-modify-playback-state',
            'user-read-playback-state',
            'user-read-currently-playing',
            'user-read-recently-played',
            'user-read-playback-position',
            'user-top-read']
        window.location.href = `${apiURL}?client_id=${clientID}&redirect_uri=${redirectURL}&scope=${scope.join(" ")}&response_type=token&show_daialog=true`
    }
    return (
        <div className='login'>
            <img src={BlackLogo} alt=''></img>
            <button onClick={handleClick}>Connect Spotify</button>
            <p>Version: Netlify.</p>
            <p>Unfortunatelly, you will not connect... Spotify's Developer Service allow to connect for authorized users only :| The image below shows what the app looks like. Soon maybe I may upload a video soon how it works, or just create a special account for testing</p>
            <div className='login-progress'>
                <img src={Work} alt=''></img>
                <div className="login-progress-info">
                    <div>
                        <p>Done:</p>
                        <ul>
                            <li>Main page's layout</li>
                            <li>Control of currently songs</li>
                            <li>Get data from <a href='https://developer.spotify.com/documentation/web-api/'>Spotify Api</a></li>
                        </ul>
                    </div>
                    <div>
                        <p>To do:</p>
                        <ul>
                            <li>Full responsivness</li>
                            <li>Subpages of playlists, tracks and artists</li>
                            <li>Logging via Spotify account</li>
                        </ul>
                    </div>
                </div>
            </div>
            <p>Designed by <a href='https://www.behance.net/gallery/82857059/electro-music-player'>Ibrahim Asiri</a></p>
        </div>
    )
}
