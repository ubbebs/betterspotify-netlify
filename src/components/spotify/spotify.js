import React, { useEffect } from 'react'
import Axios from 'axios'
import './spotify.css'

import Sidebar from './sidebar/sidebar';
import Navbar from './navbar/navbar';
import Body from './body/body';
import Footer from './footer/footer';
import { useStateProvider } from '../../utils/StateProvider';
import { reducerCases } from '../../utils/Constants';

export default function Spotify() {
  const [{ token }, dispatch] = useStateProvider();

  useEffect(() => {
    const getUserInfo = async () => {
        const { data } = await Axios.get('https://api.spotify.com/v1/me', {
            headers: {
                Authorization: 'Bearer ' + token,
                'Content-Type': 'application/json',
            },
        })
        const userInfo = {
          userID: data.id,
          userName: data.display_name,
          userAvatarURL: data.images[0].url
        }
        dispatch({ type: reducerCases.SET_USER, userInfo })
    }
    getUserInfo()
}, [token, dispatch])

  return (
    <div className='spotify'>
      <div className="spotify-main">
        <Sidebar />
        <div className='spotify-main-body'>
          <Navbar/>
          <Body />
        </div>
      </div>
      <Footer/>
    </div>
  )
}
