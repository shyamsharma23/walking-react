import { createContext, useEffect, useState } from "react";
import NavBar from "./NavBar";
import App from "../src/App";
import apiClient from "../src/services/api-client";
import { MDBSwitch } from "mdb-react-ui-kit";

export const ThemeContext = createContext(null);

const HomePage = () => {
  const [data, setData] = useState([]);
  const [mode, setMode] = useState<any>("light");
  console.log(data);

  useEffect(() => {
    apiClient
      .get(`/category`)
      .then((res) => setData(res.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <ThemeContext.Provider value={mode}>
      <div data-bs-theme={`${mode}`}>
        <NavBar value={data} />
        <MDBSwitch
          id="flexSwitchCheckDefault"
          label="Dark Mode"
          onClick={() => {
            mode == "light" ? setMode("dark") : setMode("light");
          }}
        />

        <div>
          <h1 className="text-center">List of all Products</h1>
          <App value={data} />
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default HomePage;
