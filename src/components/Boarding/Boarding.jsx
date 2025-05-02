import "bootstrap/dist/css/bootstrap.min.css";
import "./Boarding.css";
import accent1 from "../../assets/boarding-accent1.png";
import accent2 from "../../assets/boarding-accent2.png";
import accent3 from "../../assets/boarding-accent3.png";
import accent4 from "../../assets/boarding-accent4.png";
import image from "../../assets/boarding-photos.png";
import { useState } from "react";

function Package({ description, included, price, tagline }) {
  return (
    <>
      <h4>{description}</h4>
      <br />
      <h4>What's Included:</h4>
      <ul>
        {included.map((item, index) => (
          <li key={index}>
            <p>{item}</p>
          </li>
        ))}
      </ul>
      <p>Package Price: ${price}/day</p>
      <p>{tagline}</p>
    </>
  );
}

function Tab({ title }) {
  return <h4 className="text-center">{title}</h4>;
}

function Boarding() {
  const [option1, setToOption1] = useState(true);
  const [option2, setToOption2] = useState(false);
  const [option3, setToOption3] = useState(false);
  const [option4, setToOption4] = useState(false);

  const [special1, setToSpecial1] = useState(true);
  const [special2, setToSpecial2] = useState(false);
  const [special3, setToSpecial3] = useState(false);
  const [special4, setToSpecial4] = useState(false);

  const [signUp, showSignUp] = useState(false);
  const [login, showLogin] = useState(true);

  const specialPackage1 = {
    title: "Rompin' Around",
    description:
      "Treat your furry friend to the ultimate staycation with our all-inclusive specials package!",
    included: [
      "Luxury Accommodations: A cozy, private suite with plush bedding for a restful stay.",
      "Daily Playtime: Two extended group play sessions with other friendly pups in our supervised outdoor play area.",
      "Gourmet Meals: Premium dog food or personalized feeding with meals provided by you.",
      "Spa Treat: A relaxing bath and brush before pickup, so your pup goes home feeling fresh.",
      "Pup-Perks: A daily treat or puzzle toy for mental stimulation.",
      "Photo Updates: Receive a daily photo and update about your dog's adventures.",
    ],
    price: "Package Price: $125/day",
    tagline:
      "Give your pup the care and fun they deserve while you're away! 🐾",
  };

  const specialPackage2 = {
    title: "",
    description: "",
    included: [],
    price: "",
    tagline: "",
  };

  const specialPackage3 = {
    title: "",
    description: "",
    included: [],
    price: "",
    tagline: "",
  };

  const specialPackage4 = {
    title: "",
    description: "",
    included: [],
    price: "",
    tagline: "",
  };

  const standardPackage1 = {
    title: "The Happy Howler",
    description:
      "A cozy, no-frills stay perfect for pups who just want some love, space, and a treat before bed. Great for first-timers and chill companions.",
    included: [
      "Spacious private suite",
      "Two outdoor play sessions per day",
      "Daily wellness check and cuddle time",
      "Access to live cameras",
      "Nightly bedtime treat",
    ],
    price: "Package Price: $45/night",
    tagline: "Simple, sweet, and tail-wagging neat!",
  };

  const standardPackage2 = {
    title: "The Playful Pup",
    description:
      "A cozy, no-frills stay perfect for pups who just want some love, space, and a treat before bed. Great for first-timers and chill companions.",
    included: [
      "For social butterflies and high-energy hounds",
      "Everything in The Happy Howler, plus:",
      "Four group play sessions daily",
      "Daily bakery treat from our in-house Barkery",
      "Brushing and light grooming session",
    ],
    price: "Package Price: $60/night",
    tagline:
      "Give your pup the care and fun they deserve while you're away! 🐾",
  };

  const standardPackage3 = {
    title: "The Pampered Pooch (coming soon!)",
    description:
      "The ultimate boarding experience for dogs who love the finer things — plush suites, enrichment activities, and spa-style care.",
    included: [
      "For pups who love a little extra luxury",
      "VIP suite with extra bedding and toys",
      "Personal photo updates sent to owners",
      "One-on-one enrichment time (snuffle mats, puzzles, scent games)",
      "Complimentary departure bath",
    ],
    price: "Package Price: $75/night",
    tagline: "Luxury, belly rubs, and gourmet grub!",
  };

  const standardPackage4 = {
    title: "",
    description: "",
    included: [],
    price: "",
    tagline: "",
  };

  const toggleStandardPackage1 = () => {
    setToOption1(true);
    setToOption2(false);
    setToOption3(false);
    setToOption4(false);
  };

  const toggleStandardPackage2 = () => {
    setToOption1(false);
    setToOption2(true);
    setToOption3(false);
    setToOption4(false);
  };

  const toggleStandardPackage3 = () => {
    setToOption1(false);
    setToOption2(false);
    setToOption3(true);
    setToOption4(false);
  };

  const toggleStandardPackage4 = () => {
    // setToOption1(false);
    // setToOption2(false);
    // setToOption3(false);
    // setToOption4(true);
  };

  const toggleSpecialsPackage1 = () => {
    setToSpecial1(true);
    setToSpecial2(false);
    setToSpecial3(false);
    setToSpecial4(false);
  };

  const toggleSpecialsPackage2 = () => {
    // setToSpecial1(false);
    // setToSpecial2(true);
    // setToSpecial3(false);
    // setToSpecial4(false);
  };

  const toggleSpecialsPackage3 = () => {
    // setToSpecial1(false);
    // setToSpecial2(false);
    // setToSpecial3(true);
    // setToSpecial4(false);
  };

  const toggleSpecialsPackage4 = () => {
    // setToSpecial1(false);
    // setToSpecial2(false);
    // setToSpecial3(false);
    // setToSpecial4(true);
  };

  const toggleLoginForm = () => {
    showSignUp(false);
    showLogin(true);
  };

  const toggleSignUpForm = () => {
    showSignUp(true);
    showLogin(false);
  };

  return (
    <>
      <div className="row">
        <div className="col-7">
          <div className="boarding pt-0 row">
            <div className="row">
              <div className="col-2"></div>
              <div className="col-10">
                <img style={{ width: "120%" }} src={accent1} />
              </div>
              <div className="row">
                <div id="boarding-info" className="p-5 pt-0 pb-0">
                  <h1>Boarding</h1>
                  <p>
                    At Bed and Biscuits Boarding, we provide a safe,
                    comfortable, and fun environment for your furry friends
                    while you're away. Our top priority is ensuring your dog's
                    well-being, and we offer several features to give you peace
                    of mind.
                  </p>

                  <h4>Live Camera Access</h4>
                  <p>
                    We understand how important it is to stay connected with
                    your pet. That's why we provide live camera access, allowing
                    you to check in on your dog anytime, from anywhere. Simply
                    log in to our secure portal and watch your pup in real-time.
                  </p>

                  <h4>After-Hours Drop-Off</h4>
                  <p>
                    For your convenience, we offer an after-hours drop-off
                    option. If you need to drop off your dog outside of our
                    regular business hours, simply fill out the online form on
                    our website. Once completed, you will receive a unique
                    access code to use at our secure drop-off area.
                  </p>

                  <h4>Why Choose Us?</h4>
                  <ul>
                    <li>
                      <p>24/7 Camera Access - Monitor your dog anytime.</p>
                    </li>
                    <li>
                      <p>
                        Flexible Drop-Off Options - Day or night, we accommodate
                        your schedule.
                      </p>
                    </li>
                    <li>
                      <p>
                        Safe & Secure Environment - Staffed with trained
                        professionals who love dogs.
                      </p>
                    </li>
                    <li>
                      <p>
                        Spacious Play Areas - Plenty of room for exercise and
                        socialization.
                      </p>
                    </li>
                    <li>
                      <p>
                        Book your dog's stay today and experience the best in
                        dog boarding care!
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div>
                <img style={{ width: "170%" }} src={accent2} />
              </div>
            </div>
          </div>
          <div id="boarding-packages" className="p-5 pt-0 pb-0">
            <div className="row mt-4">
              <div className="d-flex flex-row">
                <div className="d-flex align-items-center">
                  <h2>Pampered Pup's Specials</h2>
                </div>
              </div>
              <div className="background">
                <div className="row boardered">
                  <div className="col-3 p-0 d-flex flex-column option-titles">
                    <div
                      onClick={toggleSpecialsPackage1}
                      className={`h-25 d-flex align-items-center justify-content-center ${
                        special1 ? "active" : ""
                      }`}
                    >
                      <Tab {...specialPackage1} />
                    </div>
                    <div
                      onClick={toggleSpecialsPackage2}
                      className={`h-25 d-flex align-items-center justify-content-center ${
                        special2 ? "active" : ""
                      }`}
                    >
                      <Tab {...specialPackage2} />
                    </div>
                    <div
                      onClick={toggleSpecialsPackage3}
                      className={`h-25 d-flex align-items-center justify-content-center ${
                        special3 ? "active" : ""
                      }`}
                    >
                      <Tab {...specialPackage3} />
                    </div>
                    <div
                      onClick={toggleSpecialsPackage4}
                      className={`h-25 d-flex align-items-center justify-content-center ${
                        special4 ? "active" : ""
                      }`}
                    >
                      <Tab {...specialPackage4} />
                    </div>
                  </div>
                  <div
                    className="col-9 p-3"
                    style={{ height: "600px", overflowY: "scroll" }}
                  >
                    {special1 ? <Package {...specialPackage1} /> : ""}
                    {special2 ? <Package {...specialPackage2} /> : ""}
                    {special3 ? <Package {...specialPackage3} /> : ""}
                    {special4 ? <Package {...specialPackage4} /> : ""}
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="d-flex flex-row">
                <div className="d-flex align-items-center">
                  <h2>Standard Boarding Options</h2>
                </div>
              </div>
              <div className="background">
                <div className="row boardered">
                  <div className="col-3 p-0 d-flex flex-column option-titles">
                    <div
                      className={`h-25 d-flex align-items-center justify-content-center ${
                        option1 ? "active" : ""
                      }`}
                      onClick={toggleStandardPackage1}
                    >
                      <Tab {...standardPackage1} />
                    </div>
                    <div
                      className={`h-25 d-flex align-items-center justify-content-center ${
                        option2 ? "active" : ""
                      }`}
                      onClick={toggleStandardPackage2}
                    >
                      <Tab {...standardPackage2} />
                    </div>
                    <div
                      className={`h-25 d-flex align-items-center justify-content-center ${
                        option3 ? "active" : ""
                      }`}
                      onClick={toggleStandardPackage3}
                    >
                      <Tab {...standardPackage3} />
                    </div>
                    <div
                      className={`h-25 d-flex align-items-center justify-content-center ${
                        option4 ? "active" : ""
                      }`}
                      onClick={toggleStandardPackage4}
                    >
                      <Tab {...standardPackage4} />
                    </div>
                  </div>
                  <div
                    className="col-9 p-3"
                    style={{ height: "600px", overflowY: "scroll" }}
                  >
                    {option1 ? <Package {...standardPackage1} /> : ""}
                    {option2 ? <Package {...standardPackage2} /> : ""}
                    {option3 ? <Package {...standardPackage3} /> : ""}
                    {option4 ? <Package {...standardPackage4} /> : ""}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="account">
            <img style={{ width: "170%" }} src={accent3} />
            <div className="row">
              <div className="col-12 p-5">
                <h2>After Hours Drop-Off Form</h2>
              </div>
              <div className="col-8 p-5 pt-0">
                <div>
                  <ul className="d-flex flex-row p-0 m-0 row tabs">
                    <li
                      onClick={toggleSignUpForm}
                      className={`col-4 ${signUp ? "active" : ""}`}
                    >
                      <h4 className="text-center p-3">Sign-up</h4>
                    </li>
                    <li
                      onClick={toggleLoginForm}
                      className={`col-4 ${login ? "active" : ""}`}
                    >
                      <h4 className="text-center p-3">Login</h4>
                    </li>
                    <li className="col-4 tab-filler"></li>
                  </ul>
                  <div
                    className="row justify-content-center m-0"
                    id="account-form"
                  >
                    <div className="col-1"></div>
                    {login ? (
                      <form id="login" className="col-10">
                        <div>
                          <h4>
                            <label>Username</label>
                          </h4>
                          <input
                            id="login-username"
                            name="login-username"
                            className="p-1 w-100"
                            type="text"
                          />
                        </div>
                        <div className="pt-4 mt-2">
                          <h4>
                            <label>Password</label>
                          </h4>
                          <input
                            id="login-password"
                            name="login-password"
                            className="p-1 w-100"
                            type="text"
                          />
                        </div>
                        <div className="d-flex justify-content-center mt-4">
                          <button className="mt-3" id="login-submit">
                            Login
                          </button>
                        </div>
                      </form>
                    ) : (
                      ""
                    )}
                    {signUp ? (
                      <form id="sign-up" className="col-10">
                        <div>
                          <h4>
                            <label>Username</label>
                          </h4>
                          <input
                            id="signup-username"
                            name="signup-username"
                            className="p-1 w-100"
                            type="text"
                          />
                        </div>
                        <div className="pt-4 mt-2">
                          <h4>
                            <label>Password</label>
                          </h4>
                          <input
                            id="signup-password"
                            name="signup-password"
                            className="p-1 w-100"
                            type="text"
                          />
                        </div>
                        <div className="d-flex justify-content-center mt-4">
                          <button className="mt-3" id="signup-submit">
                            Sign-up
                          </button>
                        </div>
                      </form>
                    ) : (
                      ""
                    )}
                    <div className="col-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img style={{ width: "170%" }} src={accent4} />
        </div>
        <div className="col-5">
          <img className="mw-100" src={image} />
        </div>
      </div>
    </>
  );
}

export default Boarding;
