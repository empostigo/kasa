// React logic
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
import SlideShow from "./SlideShow/SlideShow"

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
        element: <Home />,
      },
      {
        path: "/housing",
        element: <Housing />,
      },
      {
        path: "/about",
        element: <About />,
      },
      /* DEBUG */
      {
        path: "/test",
        element: <div><SlideShow pictures={[
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg",
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg",
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg"
   ]} /></div>,   },
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