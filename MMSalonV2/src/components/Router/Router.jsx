import { createBrowserRouter } from "react-router-dom";
import Splash from "../../pages/Splash/Splash";
import Home from "../../pages/Home/Home";
{/* TODO
import Portfolio from "../../pages/Portfolio";
import Services from "../../pages/Services";
import Products from "../../pages/Products";
import Testimonials from "../../pages/Testimonials";
*/}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Splash />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
{/*TODO
  {
    path: "/Portfolio",
    element: <Portfolio />,
  },
  {
    path: "/Services",
    element: <Services />,
  },
  {
    path: "/Products",
    element: <Products />,
  },
  {
    path: "/Testimonials",
    element: <Testimonials />,
  },
*/}
]);
