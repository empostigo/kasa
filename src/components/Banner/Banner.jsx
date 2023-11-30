import banner from "./Banner.module.scss"
import homeImg from "../../assets/home-banner.jpg"
import aboutImg from "../../assets/about-banner.jpg"

const BannerImg = ({image, altText}) => {
  return (
    <>
      <div className={banner.div}>
        <img className={banner.img} src={image} alt={altText} />
      </div>
    </>
  )
}

const BasicBanner = ({children}) => {
  return (
    <section className={banner.banner}>
      {children}
    </section>
  )
}

const HomeBanner = ({image, altText}) => {
  return (
    <BasicBanner>
      <BannerImg image={image} altText={altText} />
      <h1 className={banner.title}>Chez vous, <span className={banner.span}>partout et ailleurs</span></h1>
    </BasicBanner>
  )
}

const AboutBanner = ({image, altText}) => {
  return (
    <BasicBanner>
      <BannerImg image={image} altText={altText} />
    </BasicBanner>
  )
}

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
