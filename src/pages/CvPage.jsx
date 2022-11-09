import React, { useEffect, useState } from 'react'
import Loader2 from '../components/Loader2'
import Cv from '../components/Cv'

function CvPage() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  })

  return (
    <>
      {loading ?
        <Loader2 />
        : (
          <Cv />
        )}
    </>
  )
}

export default CvPage