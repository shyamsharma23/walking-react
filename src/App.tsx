import { useState, useEffect, FormEvent, useRef } from "react";
import Display from "../components/Display";
import apiClient from "./services/api-client";

interface Category {
  id: Number;
}

interface Product {
  category: Category;
  name: String;
  description: String;
}

const App = (props: any) => {
  const fieldRef = useRef<any>(null);
  const catRef = useRef<any>(null);
  const nameRef = useRef<any>(null);
  const [data, setData] = useState<any>([]);
  console.log(props.value);

  const obj: Product = {
    category: {
      id: 1,
    },
    name: "",
    description: "",
  };
  // let id = 0;

  useEffect(() => {
    apiClient
      .get(`/products`)
      .then((res) => setData(res.data))
      .catch((e) => console.log(e));
  }, []);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (
      fieldRef.current !== null &&
      nameRef.current != null &&
      catRef.current !== null
    ) {
      console.log(catRef.current.value);
      obj.description = fieldRef.current.value;
      obj.category.id = catRef.current.value;
      obj.name = nameRef.current.value;
      setData([obj, ...data]);
      apiClient.post("/product/create", obj).then((res) => {
        console.log(res.data);
      });
    }
  }

  return (
    <div className="container">
      <form action="POST" onSubmit={handleSubmit}>
        <select
          className="form-select mb-3"
          aria-label="Default select example"
          ref={catRef}
        >
          <option selected>Select the category</option>
          <option value="1">Book</option>
          <option value="2">Coffee Mug</option>
          <option value="3">Mouse Pad</option>
          <option value="4">Luggage Tag</option>
        </select>
        <div className="mb-3 row">
          <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
            Product Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="staticEmail"
              ref={nameRef}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="description" className="col-sm-2 col-form-label">
            Description
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="description"
              ref={fieldRef}
            />
          </div>
        </div>
        <button className="btn btn-primary mb-3">Create</button>
      </form>
      <div className="flexbox-container">
        {data.map((item: any) => (
          <Display value={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default App;
