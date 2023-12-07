// React logic
import { useState, useEffect, useRef } from "react"

// Components
import SrcSet from "../SrcSet/SrcSet"

// Images
import mBackward from "../../assets/m-backward.svg"
import dBackward from "../../assets/d-backward.svg"
import mForward from "../../assets/m-forward.svg"
import dForward from "../../assets/d-forward.svg"

// Style
import slideshow from "./SlideShow.module.scss"

const SlideShow = props => {
  // Pictures array of the slideshow
  const [picturesArray, setPicturesArray] = useState([])
  // Keep track of the current pictures index
  const [currentPicture, setCurrentPicture] = useState(0)
  // numbering actualisation
  const [imgIndex, setImgIndex] = useState(0)

  // Use to set style: when there is only one image to display,
  // Previous and next image arrows are hidden
  const previousDisplayStyle = useRef("initial")
  const nextDisplayStyle = useRef("initial")

  // In mobile, the numbering of images is hidden
  const numberingStyle = useRef("initial")

  useEffect(() => {
    setPicturesArray(props.pictures)
    setImgIndex(currentPicture + 1)

    if (props.pictures.length === 1) {
      previousDisplayStyle.current.style.display = "none"
      nextDisplayStyle.current.style.display = "none"
      numberingStyle.current.style.marginLeft = "auto"
      numberingStyle.current.style.marginRight = "auto"
    }
  }, [props.pictures, currentPicture])

  const previousPicture = () => {
    if (currentPicture === 0) setCurrentPicture(picturesArray.length - 1)
    else setCurrentPicture(currentPicture - 1)
  }

  const nextPicture = () => {
    if (currentPicture === picturesArray.length - 1) setCurrentPicture(0)
    else setCurrentPicture(currentPicture + 1)
  }

  return (
    <article className={slideshow.slideshow}>
      <button
        className={slideshow.button}
        onClick={previousPicture}
        ref={previousDisplayStyle}
      >
        <SrcSet
          img={dBackward}
          dImg={dBackward}
          mImg={mBackward}
          mWidth="13"
          dWidth="48"
          maxWidth="991"
          altText="Image précédente"
        />
      </button>
      <img
        className={slideshow.img}
        src={picturesArray[currentPicture]}
        alt="Logement - Photo 1"
      />
      <p
        className={slideshow.numbering}
        ref={numberingStyle}
      >{`${imgIndex}/${picturesArray.length}`}</p>
      <button
        className={slideshow.button}
        onClick={nextPicture}
        ref={nextDisplayStyle}
      >
        <SrcSet
          img={dForward}
          dImg={dForward}
          mImg={mForward}
          mWidth="13"
          dWidth="48"
          maxWidth="991"
          altText="Image suivante"
        />
      </button>
    </article>
  )
}

export default SlideShow
