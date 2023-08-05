import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Display from "./Display";
import apiClient from "../src/services/api-client";

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

  return (
    <div className="flexbox-container">
      {data.map((item: any) => (
        <div key={item.id}>
          <Display value={item} />
        </div>
      ))}
    </div>
  );
};

export default ProductDetail;
