// Image
import logoImg from "../../assets/black-logo.svg"

// Style
import footer from "./Footer.module.scss"

const Footer = () => {
  return (
    <footer className={footer.footer}>
      <img className={footer.logo} src={logoImg} alt="Logo Kasa" />
      <p className={footer.text}>
        <span>&copy; 2020 Kasa. All</span>
        <span>rights reserved</span>
      </p>
    </footer>
  )
}

export default Footer
