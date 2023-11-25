import Banner from "../../components/Banner/Banner"
import bannerImg from "../../assets/home-banner.svg"
import home from "./Home.module.scss"

const Home = () => {
  return (
    <main className={home.home}>
      <section className={home.section}>
        <p className={home.text}>Chez vous, <span className={home.span}>partout et ailleurs</span></p>
        <Banner image={bannerImg} altText="Bannière Page d'Accueil"/>
      </section>
    </main>
  )
}

export default Home