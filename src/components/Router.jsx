import * as React from "react"
import ReactDOM from "react-dom/client"
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
} from "react-router-dom"

import Home from "../pages/Home"
import About from "../pages/About"
import Housing from "../pages/Housing"
import Error404 from "../pages/404"

import Header from "./Header/Header"
import Footer from "./Footer/Footer"

const router = () => {
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
  )
}

export default router