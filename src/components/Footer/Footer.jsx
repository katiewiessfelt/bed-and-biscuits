import "./Footer.css";
import logo from "../../assets/Logo.png"

function Footer() {
  return (
    <>
      <footer>
        <div className="row">
          <div className="col-2 logo-container">
            <img id="logo" src={logo}/>
          </div>
          <div className="col-2">
            <p>
              Bed and Biscuits <br/>
              123 Barking Way <br/>
              Stevens Point, WI 57714
            </p>

           <p><a href="mailto:bedandbiscuits@gmail.com">bedandbiscuits@gmail.com</a></p>

            <h4>Bakery</h4>
            <p>1-234-567-8910</p>
            <h4>Boarding</h4>
            <p>1-109-8760-5432</p>
          </div>
          <div className="col-2">
            <h4>Hours</h4><br/>
            <h4>Bakery</h4>
            <p>
              <span>M - F</span><span> 7am-3p</span> <br/>
              <span>Sa</span><span> 9am-7pm</span>
            </p>
            <h4>Boarding</h4>
            <p>
              Drop-off 24/7 <br/>
              Pick-up M-Su 9am-3pm
            </p>
          </div>
          <div className="col-2">
            <a href="/bakery"><h4>Bakery</h4></a>
            <ul>
              <li><a href="#">Specials</a></li>
              <li><a href="#">Human Treats</a></li>
              <li><a href="#">Dog Treats</a></li>
            </ul>
          </div>
          <div className="col-2">
            <h4>Boarding</h4>
            <ul>
              <li><a href="#">Packages</a></li>
              <li><a href="#">Human Treats</a></li>
              <li><a href="#">Book a Stay</a></li>
            </ul>
          </div>
          <div className="col-2">
            <h4>About Us</h4>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Keep In Touch</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;
