import { Link } from "react-router-dom"
import SrcSet from "../SrcSet/SrcSet"
import dLogo from "../../assets/d-logo.svg"
import mLogo from "../../assets/m-logo.svg"
import header from "./Header.module.scss"

const NavBar = () => {
  return (
    <nav className={header.navbar}>
      <ul className={header.ul}>
        <li className={header.li}><Link to="/" className={header.anchor}>Accueil</Link></li>
        <li className={header.li}><Link to="/about" className={header.anchor}>A Propos</Link></li>
      </ul>
    </nav>
  )
}

const Header = () => {
  return (
    <header className={header.header}>
      <SrcSet logo={dLogo}
              dLogo={dLogo}
              mLogo={mLogo}
              mWidth="146"
              dWidth="211"
              maxWidth="992"
              altText="Logo Kasa"
      />
      <NavBar />
    </header>
  )
}

export default Header