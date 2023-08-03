import { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import App from "../src/App";

const HomePage = () => {
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    axios
      .get(
        `http://ec2-44-212-10-233.compute-1.amazonaws.com:3000/api/v1/category`
      )
      .then((res) => setData(res.data))
      .catch((e) => console.log(e));
  }, []);
  // axios
  //   .get(`http://localhost:8000/api/v1/category`)
  //   .then((res) => setData(res.data))
  //   .catch((e) => console.log(e));

  return (
    <div>
      <NavBar value={data} />

      <h1 className="text-center">List of all Products</h1>
      <App value={data} />
    </div>
  );
};

export default HomePage;
