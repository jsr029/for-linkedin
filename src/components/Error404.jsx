import React from 'react'
import Banner from './Banner'
import { Link } from 'react-router-dom'

function Error404() {
  const title = Banner("Error 404")
  document.title = "jsr029 | Error 404"
  document.getElementsByTagName("meta")[2].content = "Page introuvable."
return (
    <>
      {title}
      <div className="jsr029_error404">
        <h2>Oups, la page que vous recherchez n'existe pas !</h2>
        <p>Code erreur : 404</p>
        <p> <Link to='/'>Retour à l'accueil</Link></p>
      </div>
    </>
  )
}

export default Error404