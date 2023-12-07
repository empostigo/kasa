// React logic
import { Link } from "react-router-dom"

// Components
import SrcSet from "../SrcSet/SrcSet"

// Images
import dLogo from "../../assets/d-logo.svg"
import mLogo from "../../assets/m-logo.svg"

// Style
import header from "./Header.module.scss"

const NavBar = () => {
  return (
    <nav className={header.navbar}>
      <ul className={header.ul}>
        <li className={header.li}>
          <Link to="/" className={header.anchor}>
            Accueil
          </Link>
        </li>
        <li className={header.li}>
          <Link to="/about" className={header.anchor}>
            A Propos
          </Link>
        </li>
      </ul>
    </nav>
  )
}

const Header = () => {
  return (
    <header className={header.header}>
      <SrcSet
        img={dLogo}
        dImg={dLogo}
        mImg={mLogo}
        mWidth="146"
        dWidth="211"
        maxWidth="991"
        altText="Logo Kasa"
      />
      <NavBar />
    </header>
  )
}

export default Header
