import aboutData from "../../data/aboutData"
import Collapse from "../Collapse/Collapse"
import section from "./AboutSection.module.scss"

const AboutSection = () => {
  const collapses = aboutData.map(data => (
    <Collapse
      key={data.id}
      type="description"
      title={data.title}
      description={data.description}
    />
  ))

  return <section className={section.section}>{collapses}</section>
}

export default AboutSection
