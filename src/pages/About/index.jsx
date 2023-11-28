import Banner from "../../factory/banner"
import about from "./About.module.scss"

const About = () => {
  return (
    <main className={about.about}>
      <Banner />
    </main>
  )
}

export default About