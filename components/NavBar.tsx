import { Link } from "react-router-dom";
import logo from "../src/assets/apple.svg";

const NavBar = (props: any) => {
  return (
    <>
      <div>
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img
                src={logo}
                alt="Logo"
                width="30"
                height="24"
                className="d-inline-block align-text-top"
              />
              Walk-App
            </a>
            <ul className="my-nav">
              {props.value.map((item: any) => (
                <li className="nav-item " key={item.id}>
                  <Link to={`/productlist/${item.id}`}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
