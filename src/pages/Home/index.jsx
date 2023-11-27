
import { HomeBanner } from "../../components/Banner/Banner"
import Cards from "../../components/Cards/Cards"
import bannerImg from "../../assets/home-banner.svg"
import home from "./Home.module.scss"

const Home = () => {

  return (
    <main className={home.home}>
      <HomeBanner image={bannerImg} altText="Bannière Page d'Accueil" />
      <Cards />
    </main>
  )
}

export default Home