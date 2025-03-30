import "./Header.css";
import logo from "../../assets/Logo.png"
import { Link } from "react-router-dom";

function Header() {

  return (
    <>
      <nav>
        <div className="row">
          <div className="col-6">
            <Link to="/"><img id="logo" src={logo}/></Link>
          </div>
          <div className="col-6">
            <ul>
              <li>
                <Link to="/bakery"><h3>Bakery</h3></Link>
              </li>
              <li>
                <Link to="/boarding"><h3>Boarding</h3></Link>
              </li>
              <li>
                <Link to="/about"><h3>About Us</h3></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header;
