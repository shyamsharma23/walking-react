import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Display from "./Display";

const ProductDetail = () => {
  const params = useParams();
  console.log(params);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://ec2-44-212-10-233.compute-1.amazonaws.com:3000/api/v1/products/${params.id}`
      )
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
