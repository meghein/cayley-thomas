import React from 'react'
import SpotifyPlayer from 'react-spotify-player';
import './Music.scss'
 
export default function Music() {
  return (
    <div className='music-player'>
      <span>
        <SpotifyPlayer
          uri="spotify:album:3aBvYsTSyCAzGyp1buNzXz"
          size={{height: 250}}
          view='list'
          theme='black'
        />
      </span>
      <span>
        <SpotifyPlayer
          className='spotify'
          uri='spotify:album:6ZdgQY04l7vKnNua0r1vTx'
          size={{height: 250}}
          view='list'
          theme='black'
        />
      </span>

    </div>
  )
}
