import Banner from "../../components/Banner/Banner"
import Card from "../../components/Cards/Cards"
import bannerImg from "../../assets/home-banner.svg"
import home from "./Home.module.scss"

const Home = () => {
  return (
    <main className={home.home}>
      <section className={home.section}>
        <h1 className={home.title}>Chez vous, <span className={home.span}>partout et ailleurs</span></h1>
        <Banner image={bannerImg} altText="Bannière Page d'Accueil" />
      </section>
      <section>
        <Card id={1234} image="" tilte="title" />
      </section>
    </main>
  )
}

export default Home