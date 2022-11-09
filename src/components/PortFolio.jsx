import React from 'react'
import Banner from './Banner'
import Main from './Main'

function PortFolio() {
  const title = Banner("Portfolio")
  return (
    <>
    {title}
    <Main />
    </>
  )
}

export default PortFolio