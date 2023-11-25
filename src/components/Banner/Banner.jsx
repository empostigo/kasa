import banner from "./Banner.module.scss"

const Banner = ({image}, {altText}) => {
  return (
    <div className={banner.banner}>
      <img className={banner.img} src={image} alt={altText} />
    </div>
  )
}

export default Banner