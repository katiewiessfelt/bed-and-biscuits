import "./Header.css";
import logo from "../../assets/Logo.png"

function Header() {

  return (
    <>
      <header>
        <div className="row">
          <div className="col-6">
            <img id="logo" src={logo}/>
          </div>
          <div className="col-6">
            <ul>
              <li>
                <h3>Bakery</h3>
              </li>
              <li>
                <h3>Boarding</h3>
              </li>
              <li>
                <h3>About Us</h3>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
