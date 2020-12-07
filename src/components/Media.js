import React from 'react';
import { media } from '../data'
import ReactPlayer from "react-player";
import "./Media.scss";

export default function Media() {
  return (
    <div className="media-player">
      {media.map((video, index) => {
        return <ReactPlayer key={`media${index}`}className="player" url={video}/>
      })}
    </div>
  )
};