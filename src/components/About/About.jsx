import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css";
import image from "../../assets/about-us.png";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function About() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <div className="row p-5 pb-0" id="about-us">
        <div className="col-6">
          <h4>
            Welcome to Bed and Biscuits, where sweet treats meet wagging tails!
          </h4>
          <br />
          <p>
            Hi, I'm Hollis Caelestis, the proud owner of this one-of-a-kind
            bakery and dog boarding business. Ever since I was little, I've had
            two big loves—baking and dogs. So, when it came time to open my own
            business, I thought, why not combine the two? Armed with a degree in
            business, a passion for making delicious treats, and a love for
            four-legged friends, I created a space where people and their pups
            feel right at home. Whether you're stopping by for a fresh-baked
            pastry or need a cozy, caring place for your dog to stay while
            you're away, we've got you covered. I live with my amazing boyfriend
            and our adorable pups, Miko and Flit, who you'll probably see
            hanging out around the shop, greeting guests with wagging tails.
            When I'm not baking or cuddling dogs, you'll find me surrounded by
            my ever-growing collection of plants—because every cozy space needs
            a little greenery! Come by and say hi! Grab a treat, meet some furry
            friends, and experience a bakery like no other.
          </p>
        </div>
        <div className="col-6 d-flex justify-content-center">
          <img src={image} className="h-75" />
        </div>
      </div>
      <div className="row p-5 pt-0" id="contact">
        <div className="col-12">
          <h2 className="pb-4">Contact Us</h2>
          <form id="contact-us" className="p-5">
            <div className="d-flex flex-column mb-5">
              <h4 className="pb-2">
                <label>Email</label>
              </h4>
              <input type="text" />
            </div>
            <div className="d-flex flex-column mb-5">
              <h4 className="pb-2">
                <label>Message</label>
              </h4>
              <textarea className="w-100" style={{ height: "10em" }}></textarea>
            </div>
            <div className="d-flex justify-content-end">
              <button>Send</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default About;
