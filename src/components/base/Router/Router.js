import React from 'react'
import { useStaticInfo, useBasepath } from 'react-static'
import { BrowserRouter, StaticRouter } from 'react-router-dom'
// import { StaticRouter } from 'react-router-dom/server.js'

export const Router = (props) => {
  const staticInfo = useStaticInfo()
  const basepath = useBasepath()

  const routerProps = {
    basename: basepath
  }

  if (typeof document !== 'undefined') {
    return <BrowserRouter {...props}>{props.children} </BrowserRouter>
  } else {
    routerProps.location = staticInfo.path
    routerProps.context = {}
    return <StaticRouter {...routerProps} {...props}>{props.children} </StaticRouter>
  }
}
