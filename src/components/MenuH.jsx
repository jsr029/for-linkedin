import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function MenuH() {
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen((prevState) => !prevState)
    }
    return (
        <nav>
            <ul className={open ? 'hz active resp' : 'hz notActive'}>
                <li onClick={() => handleOpen()}><Link to='/'>Accueil</Link></li>
                <li onClick={() => {
                    handleOpen()
                }}>
                    <Link to='/cvpage'>Cv</Link></li>
            </ul>
            <ul className={open ? "vl open" : "vl notOpen"} onClick={() => handleOpen()}>
                <FontAwesomeIcon icon={faBars} />
            </ul>
        </nav>
    )
}

export default MenuH