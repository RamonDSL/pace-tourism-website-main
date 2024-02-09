import { createBrowserRouter, Navigate } from "react-router-dom";

import App from './App'
import Home from "./pages/Home";
import Crew from "./pages/Crew";
import Destination from "./pages/Destination";
import Technology from "./pages/Technology";

import { getPageData } from "./Store/store"

const baseName = "/DSL-space-tourism-website"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "destination",
        element: <Destination />,
        loader: () => getPageData("destinations"),
      },
      {
        path: "crew",
        element: <Crew />,
        loader: () => getPageData("crew"),
      },
      {
        path: "technology",
        element: <Technology />,
        loader: () => getPageData("technology"),
      },
      {
        path: "*",
        element: <Navigate to="/space-tourism-website-main" />,
      },
    ],
  }
], {
  basename: baseName
})

export default router;