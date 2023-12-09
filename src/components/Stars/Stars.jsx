// Components
import SrcSet from "../SrcSet/SrcSet"

// Images
import mRedStar from "../../assets/red-m-star.svg"
import dRedStar from "../../assets/red-d-star.svg"
import mGreyStar from "../../assets/grey-m-star.svg"
import dGreyStar from "../../assets/grey-d-star.svg"

// Style
import starStyle from "./Stars.module.scss"

const RedStar = () => {
  return (
    <SrcSet
      img={dRedStar}
      dImg={dRedStar}
      mImg={mRedStar}
      mWidth="18"
      dWidth="36"
      maxWidth="991"
      altText="Red Star"
    />
  )
}

const GreyStar = () => {
  return (
    <SrcSet
      img={dGreyStar}
      dImg={dGreyStar}
      mImg={mGreyStar}
      mWidth="18"
      dWidth="36"
      maxWidth="991"
      altText="Grey Star"
    />
  )
}

const Stars = props => {
  const rating = []
  const maxRating = 5
  for (let i = 0; i < maxRating; i++) {
    if (i < parseInt(props.rating)) rating.push(<RedStar key={i} />)
    else rating.push(<GreyStar key={i} />)
  }

  return <div className={starStyle.rating}>{rating}</div>
}

export default Stars
