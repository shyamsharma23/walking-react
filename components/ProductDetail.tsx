import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Display from "./Display";
import apiClient from "../src/services/api-client";

// interface Category {
//   id: Number;
// }

// interface Product {
//   category: Category;
//   name: String;
//   description: String;
//   id: Number;
// }
const ProductDetail = () => {
  const params = useParams();
  console.log(params);
  const [data, setData] = useState([]);

  useEffect(() => {
    apiClient
      .get(`/products/${params.id}`)
      .then((res) => setData(res.data))
      .catch((e) => console.log(e));
  }, []);

  function handleDelete(id: any) {
    const originalData = [...data];
    setData(data.filter((item: any) => item.id !== id));
    apiClient
      .delete(`/product/${id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        setData(originalData);
        console.log(err);
      });
  }

  return (
    <div className="flexbox-container">
      {data.map((item: any) => (
        <div key={item.id}>
          <Display value={item} onDelete={handleDelete} />
        </div>
      ))}
    </div>
  );
};

export default ProductDetail;
