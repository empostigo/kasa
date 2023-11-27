import banner from "./Banner.module.scss"

const Banner = (bannerProps) => {
  const {image, altText} = bannerProps
  return (
    <div className={banner.banner}>
      <img className={banner.img} src={image} alt={altText} />
    </div>
  )
}

export default Banner