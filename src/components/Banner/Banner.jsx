import banner from "./Banner.module.scss"

const Banner = ({image}, {altText}) => {
  return (
    <section className={banner.banner}>
      <img className={banner.img} src={image} alt={altText} />
    </section>
  )
}

export default Banner