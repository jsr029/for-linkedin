import React from 'react'

function Banner(title) {
    const alea = Math.random()*10
    return (
        <div className='jsr029_banner'>
            <h1 key={alea}>{title}</h1>
        </div>
    )
}

export default Banner