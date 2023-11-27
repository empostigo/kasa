import { Link } from "react-router-dom"
import card from "./Cards.module.scss"

const Card = ({id, image, title}) => {
  return (
    <article className={card.card}>
      <Link to={`/housing/${id}`} className={card.link}>
        <img src={image} alt={`Logement ${id}`} className={card.img} />
        <h2 className={card.h2}>{title}</h2>
      </Link>
    </article>
  )
}

export default Card