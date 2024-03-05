// import Home from "./pages/Home";
// import LikedMemes from "./pages/LikedMemes";
// import NewMemeForm from "./pages/NewMemeForm";
// import MemeLibrary from "./components/MemeLibrary";
// import ErrorPage from "./pages/ErrorPage";

// const routes = [
//   {
//     path: "/",
//     element: <Home />,
//     errorElement: <ErrorPage />
//   },
//   {
//     path: "/favorites",
//     element: <LikedMemes />,
//     errorElement: <ErrorPage />
//   },
//   {
//     path: "/upload",
//     element: <NewMemeForm />,
//     errorElement: <ErrorPage />
//   },
//   {
//     path: "/memes/:id",
//     element: <MemeLibrary />,
//     errorElement: <ErrorPage />
//   }
// ];

// export default routes;

import Home from "./pages/Home";
import LikedMemes from "./pages/LikedMemes";
import NewMemeForm from "./pages/NewMemeForm";
import MemeLibrary from "./components/MemeLibrary";
// import ErrorPage from "./pages/ErrorPage";

const routes = [
  {
    path: "/",
    element: () => <Home />,
    // errorElement: () => <ErrorPage />
  },
  {
    path: "/favorites",
    element: () => <LikedMemes />,
    // errorElement: () => <ErrorPage />
  },
  {
    path: "/upload",
    element: () => <NewMemeForm />,
    // errorElement: () => <ErrorPage />
  },
  {
    path: "/memes/:id",
    element: () => <MemeLibrary />,
    // errorElement: () => <ErrorPage />
  }
];

export default routes;
