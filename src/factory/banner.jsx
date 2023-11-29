import { HomeBanner, AboutBanner } from "../components/Banner/Banner"
import homeImg from "../assets/home-banner.jpg"
import aboutImg from "../assets/about-banner.jpg"

const Banner = () => {
  const pageURL = document.location

  if( /about/.test(pageURL) )
    return(
      <AboutBanner image={aboutImg} altText="Bannière Page À Propos" />
    )
  
  return (
    <HomeBanner image={homeImg} altText="Bannière Page d'Accueil" />
  )
}

export default Banner