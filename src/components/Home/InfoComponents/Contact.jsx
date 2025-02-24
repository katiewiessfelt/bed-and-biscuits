import decorativeSquare from "../../../assets/decorative-square.png";
import phone from "../../../assets/phone-solid.png";

function Contact() {
  return (
    <>
      <img src={decorativeSquare} />
      <div className="centered">
        <img className="icon" src={phone} />
        <div className="info-text">
          <h3>Contact</h3>
          <h4>Bakery</h4>
          <p>1-234-567-8910</p>
          <h4>Boarding</h4>
          <p>1-109-8760-5432</p>
          <br />
        </div>
      </div>
    </>
  );
}

export default Contact;
