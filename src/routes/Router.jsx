import { createBrowserRouter } from "react-router-dom";
import Root from "../assets/layouts/Root";
import Home from "../assets/pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />
      },
    ]
  },
]);

export default router;