// Data
import housingData from "../../data/logements.json"

// React logic
import { Link } from "react-router-dom"

// Style
import card from "./Cards.module.scss"

const Card = props => {
  return (
    <article
      className={card.card}
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.5) ), url(${props.image})`,
        backgroundSize: "cover"
      }}
    >
      <Link to={`/housing/${props.id}`} className={card.link}>
        <h2 className={card.h2}>{props.title}</h2>
      </Link>
    </article>
  )
}

const Cards = () => {
  const cards = housingData
    .map(object => (({ id, title, cover }) => ({ id, title, cover }))(object))
    .map(card => (
      <Card key={card.id} id={card.id} image={card.cover} title={card.title} />
    ))

  return <section className={card.cards}>{cards}</section>
}

export default Cards
