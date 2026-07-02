import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home";
import About from "../pages/about";
import Products from "../pages/products";
import Contact from "../pages/contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "products", element: <Products /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

export default router;
