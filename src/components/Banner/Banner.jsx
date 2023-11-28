import banner from "./Banner.module.scss"

const BannerImg = ({image, altText}) => {
  return (
    <>
      <div className={banner.div}>
        <img className={banner.img} src={image} alt={altText} />
      </div>
      <div className={banner.filter}></div>
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

export const HomeBanner = ({image, altText}) => {
  return (
    <BasicBanner>
      <BannerImg image={image} altText={altText} />
      <h1 className={banner.title}>Chez vous, <span className={banner.span}>partout et ailleurs</span></h1>
    </BasicBanner>
  )
}

export const AboutBanner = ({image, altText}) => {
  return (
    <BasicBanner>
      <BannerImg image={image} altText={altText} />
    </BasicBanner>
  )
}
