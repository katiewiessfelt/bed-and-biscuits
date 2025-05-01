import "./Footer.css";
import logo from "../../assets/Logo.png"

function Footer() {
  const rootPath = import.meta.env.VITE_ROOT_PATH
  return (
    <>
      <footer>
        <div className="row">
          <div className="col-2 logo-container">
            <a href={`${rootPath}`}><img id="logo" src={logo}/></a>
          </div>
          <div className="col-2">
            <p>
              Bed and Biscuits <br/>
              123 Barking Way <br/>
              Stevens Point, WI 57714
            </p>

           <p><a href="mailto:bedandbiscuits@gmail.com">bedandbiscuits@gmail.com</a></p>

            <a href={`${rootPath}/bakery`}><h4>Bakery</h4></a>
            <p>1-234-567-8910</p>
            <a href={`${rootPath}/boarding`}><h4>Boarding</h4></a>
            <p>1-109-8760-5432</p>
          </div>
          <div className="col-2">
            <h4>Hours</h4><br/>
            <a href={`${rootPath}/bakery`}><h4>Bakery</h4></a>
            <p>
              <span>M - F</span><span> 7am-3p</span> <br/>
              <span>Sa</span><span> 9am-7pm</span>
            </p>
            <a href={`${rootPath}/boarding`}><h4>Boarding</h4></a>
            <p>
              Drop-off 24/7 <br/>
              Pick-up M-Su 9am-3pm
            </p>
          </div>
          <div className="col-2">
            <a href={`${rootPath}/bakery`}><h4>Bakery</h4></a>
            <ul>
              <li><a href={`${rootPath}/bakery#specials`}>Specials</a></li>
              <li><a href={`${rootPath}/bakery#human-treats`}>Human Treats</a></li>
              <li><a href={`${rootPath}/bakery#dog-treats`}>Dog Treats</a></li>
            </ul>
          </div>
          <div className="col-2">
          <a href={`${rootPath}/boarding`}><h4>Boarding</h4></a>
            <ul>
              <li><a href={`${rootPath}/boarding#boarding-info`}>Info</a></li>
              <li><a href={`${rootPath}/boarding#boarding-packages`}>Packages</a></li>
              <li><a href={`${rootPath}/boarding#book-a-stay`}>Book a Stay</a></li>
            </ul>
          </div>
          <div className="col-2">
            <h4>About Us</h4>
            <ul>
              <li><a href={`${rootPath}/about-us`}>About</a></li>
              <li><a href={`${rootPath}/about-us#contact`}>Keep In Touch</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;
