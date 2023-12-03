import { Link } from "react-router-dom"
import SrcSet from "../../components/SrcSet/SrcSet"
import mLogo from "../../assets/m-404.svg"
import dLogo from "../../assets/d-404.svg"
import error from "./404.module.scss"

const Error404 = () => {
  return (
    <main className={error.main}>
      <SrcSet 
        img={dLogo}
        dImg={dLogo}
        mImg={mLogo}
        mWidth="199"
        dWidth="598"
        maxWidth="991"
        altText="Erreur 404"
      />
      <p className={error.text}>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className={error.link}>Retourner sur la page d'accueil</Link>
    </main>
  )
}

export default Error404
