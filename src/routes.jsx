import React from "react";
import Home from "./pages/Home";
import LikedMemes from "./pages/LikedMemes";
import NewMemeForm from "./pages/NewMemeForm";
import MemeLibrary from "./components/MemeLibrary";
import ErrorPage from "./pages/ErrorPage";
// import NavBar from "./components/NavBar";

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/favorites",
    element: <LikedMemes />,
    errorElement: <ErrorPage />
  },
  {
    path: "/upload",
    element: <NewMemeForm />,
    errorElement: <ErrorPage />
  },
  {
    path: "/library",
    element: <MemeLibrary />,
    errorElement: <ErrorPage />
  }
];

export default routes;

