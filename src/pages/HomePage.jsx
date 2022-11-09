import React, { useEffect, useState } from 'react'
import Loader from '../components/Loader'
import PortFolio from '../components/PortFolio'

function HomePage() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  })
  return (
    <>
      {loading ?
        <Loader />
        : (
            <PortFolio />
        )}
    </>

  )
}

export default HomePage