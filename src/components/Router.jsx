// React logtic
import React from "react"
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom"

// Pages
import Home from "../pages/Home"
import About from "../pages/About"
import Housing from "../pages/Housing"
import Error404 from "../pages/404"

// Components
import Header from "./Header/Header"
import Footer from "./Footer/Footer"

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/housing",
        element: <Housing />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "*",
        element: <Error404 />
      },
    ]
  }
])

const KasaRouter = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}

export default KasaRouter