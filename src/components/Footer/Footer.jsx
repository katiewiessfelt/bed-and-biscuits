import "./Footer.css";
import logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer>
        <div className="row">
          <div className="col-2 logo-container">
            <Link to={"/"}>
              <img id="logo" src={logo} />
            </Link>
          </div>
          <div className="col-2">
            <p>
              Bed and Biscuits <br />
              123 Barking Way <br />
              Stevens Point, WI 57714
            </p>

            <Link to={"mailto:bedandbiscuits@gmail.com"}>
              <p>bedandbiscuits@gmail.com</p>
            </Link>
            <Link to={"/bakery"}>
              <p>Bakery</p>
            </Link>
            <Link to={"/boarding"}>
              <p>Boarding</p>
            </Link>
            <a href="/bakery">
              <h4></h4>
            </a>
            <p>1-234-567-8910</p>
            <Link to={"/bakery"}>
              <h4>Bakery</h4>
            </Link>
            <p>1-109-8760-5432</p>
          </div>
          <div className="col-2">
            <h4>Hours</h4>
            <br />
            <Link to={"/boarding"}>
              <h4>Boarding</h4>
            </Link>
            <p>
              <span>M - F</span>
              <span> 7am-3p</span> <br />
              <span>Sa</span>
              <span> 9am-7pm</span>
            </p>
            <Link to={"/boarding"}>
              <h4>Boarding</h4>
            </Link>
            <p>
              Drop-off 24/7 <br />
              Pick-up M-Su 9am-3pm
            </p>
          </div>
          <div className="col-2">
            <Link to={"/bakery"}>
              <h4>Bakery</h4>
            </Link>
            <ul>
              <li>
                <Link to={"/bakery#bakery-specials"}>Specials</Link>
              </li>
              <li>
                <Link to={"/bakery#human-treats"}>Human Treats</Link>
              </li>
              <li>
                <Link to={"/bakery#dog-treats"}>Dog Treats</Link>
              </li>
            </ul>
          </div>
          <div className="col-2">
            <a href="/boarding">
              <h4>Boarding</h4>
            </a>
            <ul>
              <li>
                <Link to={"/boarding#boarding-info"}>Info</Link>
              </li>
              <li>
                <Link to={"/boarding#boarding-packages"}>Packages</Link>
              </li>
              <li>
                <Link to={"/boarding#book-a-stay"}>Book a Stay</Link>
              </li>
            </ul>
          </div>
          <div className="col-2">
            <a href="/about">
              <h4>About Us</h4>
            </a>
            <ul>
              <li>
                <Link to={"/about#about-us"}>About</Link>
              </li>
              <li>
                <Link to={"/about#contact"}>Keep In Touch</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
