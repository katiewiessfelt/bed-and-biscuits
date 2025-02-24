import clock from "../../../assets/clock-solid.png";
import decorativeSquare from "../../../assets/decorative-square.png";

function OpenHours() {
  return(
    <>
      <img src={decorativeSquare} />
      <div className="centered">
        <img className="icon" src={clock} />
        <div className="info-text">
          <h3>Open Hours</h3>
          <h4>Bakery</h4>
          <p>M - F 7am-3p <br/> Sa 9am-7pm</p>
          <h4>Boarding</h4>
          <p>Drop-off 24/7 <br/> Pick-up M-Su 9am-3pm</p>
        </div>
      </div>
    </>
  )
}

export default OpenHours;
