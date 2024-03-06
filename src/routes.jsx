import React from "react";
import Home from "./pages/Home";
import LikedMemes from "./pages/LikedMemes";
import NewMemeForm from "./pages/NewMemeForm";
import MemeLibrary from "./pages/MemeLibrary";
import ErrorPage from "./pages/ErrorPage";
import MemeDetail from "./components/MemeDetail";

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
    path: "/library/",
    element: <MemeLibrary />,
    errorElement: <ErrorPage />
  },
  {
    path: "/memes/:id",
    element: <MemeDetail />,
    errorElement: <ErrorPage />
  },
];

export default routes;

