// React logic
import { Link } from "react-router-dom"

// Components
import SrcSet from "../../components/SrcSet/SrcSet"

// Images
import mLogo from "../../assets/m-404.svg"
import dLogo from "../../assets/d-404.svg"

// Style
import errorStyle from "./404.module.scss"

const Error404 = () => {
  return (
    <main className={errorStyle.main}>
      <SrcSet
        img={dLogo}
        dImg={dLogo}
        mImg={mLogo}
        mWidth="199"
        dWidth="598"
        maxWidth="991"
        altText="Erreur 404"
      />
      <p className={errorStyle.text}>
        Oups! La page que vous demandez n&apos;existe pas.
      </p>
      <Link to="/" className={errorStyle.link}>
        Retourner sur la page d&apos;accueil
      </Link>
    </main>
  )
}

export default Error404
