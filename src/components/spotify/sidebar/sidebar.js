import React from 'react'
import { IoLibrary } from 'react-icons/io5'
import { MdHomeFilled, MdSearch } from 'react-icons/md'
import Playlists from './playlists/playlists'
import './sidebar.css'
import spotifywhitelogo from '../../../assets/spotifywhitelogo.png'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar-logo'>
        <img 
          src={spotifywhitelogo}
          alt='spotify logo'/>
      </div>
      <ul>
        <li>
          <MdHomeFilled />
          <span>Home</span>
        </li>
        <li>
          <MdSearch />
          <span>Search</span>
        </li>
        <li>
          <IoLibrary />
          <span>Library</span>
        </li>
      </ul>
      <Playlists/>
    </div>
  )
}
