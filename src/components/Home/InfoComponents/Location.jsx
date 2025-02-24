import decorativeSquare from "../../../assets/decorative-square.png";
import location from "../../../assets/location-dot-solid.png";

function Location() {
    return(
      <>
        <img src={decorativeSquare} />
        <div className="centered">
          <img className="icon" src={location} />
          <div className="info-text">
            <h3>Location</h3><br/><br/>
            <p>
              Bed and Biscuits <br/>
              123 Barking Way <br/>
              Stevens Point, WI 57741
            </p>
            <br/><br/>
          </div>
        </div>
      </>
    )
  }

export default Location;
