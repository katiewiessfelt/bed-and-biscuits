import "./Header.css";
import logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <>
      <nav>
        <div className="row">
          <div className="col-3">
            <Link to={`${import.meta.env.VITE_ROOT_PATH}`}>
              <img id="logo" src={logo} />
            </Link>
          </div>
          <div className="col-9">
            <ul>
              <li>
                <Link to={`${import.meta.env.VITE_ROOT_PATH}`}>
                  <h3>Home</h3>
                </Link>
              </li>
              <li>
                <Link to={`${import.meta.env.VITE_ROOT_PATH}/bakery`}>
                  <h3>Bakery</h3>
                </Link>
              </li>
              <li>
                <Link to={`${import.meta.env.VITE_ROOT_PATH}/boarding`}>
                  <h3>Boarding</h3>
                </Link>
              </li>
              <li>
                <Link to={`${import.meta.env.VITE_ROOT_PATH}/about`}>
                  <h3>About Us</h3>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* <FontAwesomeIcon icon={faBars} size="2x" /> */}
      </nav>
    </>
  );
}

export default Header;
