import housingData from "../../data/logements.json"
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

const Cards = () => {
  const cards = housingData
                .map(object => (({id, title, cover}) => ({id, title, cover}))(object))
                .map(card => <Card key={card.id} id={card.id} image={card.cover} title={card.title} />)

  return (
    <section className={card.cards}>
     {cards} 
    </section>
  )
}

export default Cards