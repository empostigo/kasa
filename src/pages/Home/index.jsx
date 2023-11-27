import { HomeBanner } from "../../components/Banner/Banner"
import Card from "../../components/Cards/Cards"
import bannerImg from "../../assets/home-banner.svg"
import home from "./Home.module.scss"

const Home = () => {
  return (
    <main className={home.home}>
      <HomeBanner image={bannerImg} altText="Bannière Page d'Accueil" />
      <section>
        <Card id={1234} image="" tilte="title" />
      </section>
    </main>
  )
}

export default Home