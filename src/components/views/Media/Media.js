import React from 'react'
import { youtube } from './constants'

export function Media () {
  return (
    <div className='media-player'>
      {Object.entries(youtube).map(([ref, title], index) => {
        return (
          <iframe
            key={`mediaKey${index}`}
            width='560'
            height='315'
            src={`https://www.youtube.com/embed/${ref}?enablejsapi=1&html5=1`}
            srcDoc={`<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:105%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/${ref}?autoplay=1><img src=https://img.youtube.com/vi/${ref}/hqdefault.jpg alt=${title}><span>▶</span></a>`}
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            title={title}
          />
        )
      })}
    </div>
  )
};
