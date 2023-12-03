import SrcSet from "../SrcSet/SrcSet"
import mBackward from "../../assets/m-backward.svg"
import dBackward from "../../assets/d-backward.svg"
import mForward from "../../assets/m-forward.svg"
import dForward from "../../assets/d-forward.svg"
import aboutBanner from "../../assets/about-banner.jpg"
import slideshow from"./SlideShow.module.scss"

const SlideShow = (props) => {
  const imgIndex = `1/4`

  return (
    <article className={slideshow.slideshow}>
      <SrcSet
        img={dBackward}
        dImg={dBackward}
        mImg={mBackward}
        mWidth="13"
        dWidth="48"
        maxWidth="991"
        altText="Image précédente"
      />
        <img className={slideshow.img} src={aboutBanner} alt="Logement - Photo 1" />
        <p className={slideshow.numbering}>{imgIndex}</p>
        <SrcSet
        img={dForward}
        dImg={dForward}
        mImg={mForward}
        mWidth="13"
        dWidth="48"
        maxWidth="991"
        altText="Image suivante"
      />
    </article>
  )
}

export default SlideShow