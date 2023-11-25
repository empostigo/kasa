import { Link } from "react-router-dom"
import dLogo from "../../assets/d-logo.svg"
import mLogo from "../../assets/m-logo.svg"
import header from "./Header.module.scss"

const SrcSet = () => {
  return (
    <img
      src={dLogo}
      srcSet={`${mLogo} 146w, ${dLogo} 211w`}
      sizes="(max-width: 992px) 146px, 211px"
      alt="Logo Kasa"
    />
  )
}

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
      <SrcSet />
      <NavBar />
    </header>
  )
}

export default Header