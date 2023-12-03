import aboutData from "../../data/aboutData"
import collapse from "./Collapse.module.scss"

const Collapse = (props) => {
  return (
    <details className={collapse.details}>
      <summary className={collapse.summary}>{props.title}</summary>
        {props.children}
    </details>
  )
}

const AboutCollapse = (props) => {
  return (
    <Collapse title={props.title}>
      <p className={collapse.description}>{props.description}</p>
    </Collapse>
  )
}

export const AboutSection = () => {
  const collapses = aboutData.map(data => <AboutCollapse key={data.id}
                                                         title={data.title} 
                                                         description={data.description} />)
  return (
    <section className={collapse.section}>
      {collapses}
    </section>
  )
}

export const HousingCollapse = () => {
  return
}