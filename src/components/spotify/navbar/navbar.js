import React from 'react'
import { useStateProvider } from '../../../utils/StateProvider'
import { FaSearch } from 'react-icons/fa'

import './navbar.css'

export default function Navbar() {
  const [{ userInfo }] = useStateProvider();
  return (
    <div className='navbar'>
      <div className="searchbar">
        <FaSearch />
        <input type="text" placeholder='Search' />
      </div>
      <div className="avatar">
        <a href='#'>
          <img src={userInfo?.userAvatarURL} />
          <span>{userInfo?.userName}</span>
        </a>
      </div>
    </div>
  )
}
