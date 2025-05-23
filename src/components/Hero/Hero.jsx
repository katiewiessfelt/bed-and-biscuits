import "./Hero.css"
import heroImage from "../../assets/watermelon-treat.jpg"
import logo from "../../assets/Logo.png"


function Hero() {
  return (
    <>
      <div className="row">
        <div className="col-12 hero-image-container">
          <div id="overlay">
            <img src={logo}/>
            {/* <div id="double-downarrows">
              <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-chevron-double-down" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
              </svg>
            </div> */}
          </div>
          <div className="sepia-dark background-image">
            <img src={heroImage}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
