import * as React from "react"
import { createRoot } from "react-dom/client"
import {
  createBrowserRouter,
  Route,
  Link,
} from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Housing from "../pages/Housing"
import Error404 from "../pages/404"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "housing",
    element: <Housing />,
  },
  {
    path: "404",
    element: <Error404 />,
  },
])

export default router