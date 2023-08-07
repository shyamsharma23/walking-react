import { createBrowserRouter } from "react-router-dom";
import HomePage from "../components/HomePage";
import ProductDetail from "../components/ProductDetail";
import UpdateProduct from "../components/UpdateProduct";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/productlist/:id",
    element: <ProductDetail />,
  },
  {
    path: "/updateProduct/:id",
    element: <UpdateProduct />,
  },
]);

export default router;
