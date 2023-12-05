import housingData from "../../data/logements.json"
import { useParams } from "react-router-dom"

import SlideShow from "../../components/SlideShow/SlideShow"
import Tags from "../../components/Tags/Tags"
import Name from "../../components/Name/Name"
import Stars from "../../components/Stars/Stars"
import Collapse from "../../components/Collapse/Collapse"

import housing from "./Housing.module.scss"

const Housing = () => {
  const { id } = useParams()
  const data = housingData.find(data => data.id === id)

  return (
    <main className={housing.housing}>
      <SlideShow pictures={data.pictures} />
      <section className={housing.container}>
        <div className={housing.infos}>
          <article className={housing.banner}>
            <div className={housing.titles}>
              <h1 className={housing.h1}>{data.title}</h1>
              <h2 className={housing.h2}>{data.location}</h2>
            </div>
            <Tags tags={data.tags} />
          </article>
          <div className={housing.renter}>
            <div className={housing.thumbnail}>
              <Name string={data.host.name} />
              <img
                className={housing.picture}
                src={data.host.picture}
                alt={data.host.name}
              />
            </div>
            <Stars rating={data.rating} />
          </div>
        </div>
        <section className={housing.section}>
          <Collapse
            type="description"
            title="Description"
            description={data.description}
          />
          <Collapse type="list" title="Équipements" list={data.equipments} />
        </section>
      </section>
    </main>
  )
}

export default Housing
