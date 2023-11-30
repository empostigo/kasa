import Banner from "../../components/Banner/Banner"
import Cards from "../../components/Cards/Cards"
import home from "./Home.module.scss"

const Home = () => {

  return (
    <main className={home.home}>
      <Banner />
      <Cards />
    </main>
  )
}

export default Home