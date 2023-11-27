import banner from "./Banner.module.scss"

const BannerImg = ({image, altText}) => {
  return (
    <div className={banner.div}>
      <img className={banner.img} src={image} alt={altText} />
    </div>
  )
}

const Banner = ({children}) => {
  return (
    <section className={banner.banner}>
      {children}
    </section>
  )
}

export const HomeBanner = ({image, altText}) => {
  return (
    <Banner>
      <BannerImg image={image} altText={altText} />
      <h1 className={banner.title}>Chez vous, <span className={banner.span}>partout et ailleurs</span></h1>
    </Banner>
  )
}
