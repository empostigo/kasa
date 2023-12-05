import housingData from "../../data/logements.json"
import { useParams } from "react-router-dom"

import SlideShow from "../../components/SlideShow/SlideShow"
import Tags from "../../components/Tags/Tags"
import Name from "../../components/Name/Name"
import Stars from "../../components/Stars/Stars"
import { HousingCollapse } from "../../components/Collapse/Collapse"

import housing from "./Housing.module.scss"

const Housing = () => {
  const { id } = useParams()
  const data = housingData.find(data => data.id === id)


  return (
    <main className={housing.housing}>
      <SlideShow pictures={data.pictures} />
      <section>
        <div className={housing.infos}>
          <article className={housing.banner}>
            <div className={housing.titles} >
              <h1 className={housing.h1}>{data.title}</h1>
              <h2 className={housing.h2}>{data.location}</h2>
            </div>
              <Tags tags={data.tags} />
          </article>
          <div>
            <div className={housing.thumbnail}>
              <Name string={data.host.name} />
              <img src={data.host.picture} alt={data.host.name} className={housing.picture} />
            </div>
            <Stars />
          </div>
        </div>
        <div>
          <HousingCollapse />
          <HousingCollapse />
        </div>
      </section>
    </main>
  )
}

export default Housing
