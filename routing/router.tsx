import { createBrowserRouter } from "react-router-dom";
import HomePage from "../components/HomePage";
import ProductDetail from "../components/ProductDetail";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/productlist/:id",
    element: <ProductDetail />,
  },
]);

export default router;
