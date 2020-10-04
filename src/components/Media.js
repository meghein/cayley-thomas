import React from 'react'
import ReactPlayer from "react-player"
import "./Media.scss"

export default function Media() {
  return (
    <div className="media-player">
      <ReactPlayer
        className="player"
        url="https://youtu.be/TSMWmTO3vZ0"
      />
      <ReactPlayer
        className="player"
        url="https://youtu.be/CFwoSoLSa68"
      />
      <ReactPlayer
        className="player"
        url="https://youtu.be/1vd7kWzMWWo"
      />
      <ReactPlayer
        className="player"
        url="https://youtu.be/lzhWd8RspQw"
      />
      <ReactPlayer
        className="player"
        url="https://youtu.be/8KJzWeoRlJ0"
      />
      <ReactPlayer
        className="player"
        url="https://youtu.be/7s4A6V1Nfng"
      />
      <ReactPlayer
        className="player"
        url="https://youtu.be/uWyFuZoLqgc"
      />
    </div>
  )
}