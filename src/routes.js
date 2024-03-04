import Home from "./pages/Home";
import Favorites from "./pages/LinkedMemes";
import Upload from "./pages/NewMemeForm";
import ErrorPage from "./pages/ErrorPage";

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  }, 
  {
    path: "/favorites",
    element: <Favorites />,
    errorElement: <ErrorPage />
  },
  {
    path: "/upload",
    element: <Upload />,
    errorElement: <ErrorPage />
  }
];

export default routes;