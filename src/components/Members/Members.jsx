import 'bootstrap/dist/css/bootstrap.min.css';
import "./Members.css";
import fullWidthLine from "../../assets/full-width-line.png"

function Members() {
  return (
    <>
      <div id="welcome">
        <h1>Welcome</h1>
        <span>
          At Bed and Biscuits, we bring together the best of two worlds:
          delightful baked goods for you and a cozy, caring haven for your furry
          friends. Savor the aroma of freshly baked treats and freshly brewed
          coffee while knowing your beloved dog is in the best hands, enjoying a
          safe and comfortable stay. Whether you're stopping by for a sweet
          indulgence or dropping off your pup for some tail-wagging fun, we're
          here to make your day extra special! 🐾🍪
        </span>
      </div>
      <div id="specials">
        <div className="row">
          <div className="col-12">
            <img src={fullWidthLine}/>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <img src={fullWidthLine}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Members;