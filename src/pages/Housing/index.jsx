import housingData from "../../data/logements.json"
import { useParams } from "react-router-dom"
import SlideShow from "../../components/SlideShow/SlideShow"
import Tags from "../../components/Tags/Tags"
import Stars from "../../components/Stars/Stars"
import { HousingCollapse } from "../../components/Collapse/Collapse"

import housing from "./Housing.module.scss"

const Housing = () => {
  const { id } = useParams()
  const data = housingData.find(data => data.id === id)


  return (
    <main>
      <SlideShow pictures={data.pictures} />
      <section>
        <div>
          <div>
            <h1></h1>
            <h2></h2>
            <Tags />
          </div>
          <div>
            <div>
              <h3></h3>
              <img src="" alt="" />
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
