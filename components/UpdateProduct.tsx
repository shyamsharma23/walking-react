import { FormEvent, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import apiClient from "../src/services/api-client";

interface Category {
  id: Number;
}

interface Product {
  category: Category;
  name: String;
  description: String;
}

const UpdateProduct = () => {
  const params = useParams();
  console.log(params);
  const fieldRef = useRef<any>(null);
  const catRef = useRef<any>(null);
  const nameRef = useRef<any>(null);

  const navigate = useNavigate();

  const obj: Product = {
    category: {
      id: 1,
    },
    name: "",
    description: "",
  };

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

      apiClient
        .put(`/product/${params.id}`, obj)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    navigate("/");
  }

  return (
    <div>
      <form action="PUT" onSubmit={handleSubmit}>
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
        <button className="btn btn-success mb-3">Save</button>
      </form>
    </div>
  );
};

export default UpdateProduct;
