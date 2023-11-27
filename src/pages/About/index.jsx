import { AboutBanner } from "../../components/Banner/Banner"
import bannerImg from "../../assets/about-banner.svg"
import about from "./About.module.scss"

const About = () => {
  return (
    <main className={about.about}>
        <AboutBanner image={bannerImg} altText="Bannière Page À Propos" />
    </main>
  )
}

export default About