import 'bootstrap/dist/css/bootstrap.min.css';
import "./Home.css";
import OpenHours from "./InfoComponents/OpenHours";
import Contact from "./InfoComponents/Contact";
import Location from "./InfoComponents/Location";
import Carousel from "react-bootstrap/Carousel";
import carouselSpecial3 from "../../assets/home-special3.jpg"
import carouselSpecial from "../../assets/home-special1.jpg"
import carouselSpecial2 from "../../assets/home-special2.jpg"
import fullWidthLine from "../../assets/full-width-line.png"

function InfoComponent({ component }) {
  return (
    <>
      <div className="decorative-square">{component}</div>
    </>
  );
}

function Slide({ image, specialName, forHumans, forPups, tagLine }) {
  return (
    <>
      <div className="row">
        <div className="col-6 carousel-text d-flex justify-content-end">
          <div className="col-10">
            <h2 className="text-center pb-3">Daily Specials</h2>
            <br/>
            <h3 className="text-center pb-3">{specialName}</h3>
            <br/>
            <h4>For the Humans:</h4>
            <p>
              {forHumans}
            </p>
            <br/>
            <h4>For the Pups:</h4>
            <p>
              {forPups}
            </p>
            <br/>
            <p className="text-center pb-3">{tagLine}</p>
          </div>
        </div>
        <div className="col-6 overlay">
          <img src={image}/>
        </div>
      </div>
    </>
  )
}

function Home() {
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
      <div id="info">
        <InfoComponent component={<OpenHours />} />
        <InfoComponent component={<Location />} />
        <InfoComponent component={<Contact />} />
      </div>
      <div id="specials">
        <div className="row">
          <div className="col-12">
            <img src={fullWidthLine}/>
          </div>
        </div>
        <div id="carousel">
          <Carousel>
            <Carousel.Item className="w-100">
              <Slide
                image={carouselSpecial3}
                specialName="Bark & Bite Combo"
                forHumans="Vanilla Bean Latte (hot or iced) Homemade Blueberry Scone topped with a light lemon glaze"
                forPups="Puppy Latte (whipped cream with a sprinkle of crumbled dog treats) and Peanut Butter Pupcake made with dog-safe ingredients, topped with a carob 'frosting'"
                tagLine="Come in and enjoy this tail-waggingly good pairing! 🐾☕️🍩"
              />
            </Carousel.Item>
            <Carousel.Item className="w-100">
              <Slide
                image={carouselSpecial2}
                specialName="🐾 Tail-Wagging Treat Duo"
                forHumans="A Warm Vanilla Chai Latte, infused with comforting spices, paired with a Buttery Almond Croissant for a flaky, nutty treat"
                forPups="A Pumpkin Spice Pup Cup (whipped goat's milk with a sprinkle of cinnamon) and a Peanut Butter & Oat Biscuit, baked fresh with all-natural ingredients"
                tagLine="Because chilly days are better with a warm drink and a happy pup!"
              />
            </Carousel.Item>
            <Carousel.Item className="w-100">
              <Slide
                image={carouselSpecial}
                specialName="🎂 Paw-ty Celebration Special (Pre-Order Only)"
                forHumans="A Slice of Decadent Chocolate Cake and a Cup of Freshly Brewed Espresso for the perfect pairing"
                forPups="A Mini Peanut Butter Pupcake, topped with dog-safe yogurt “frosting,” and a Refreshing Goat’s Milk & Honey Drink."
                tagLine="Because every birthday (or gotcha day!) deserves a shared treat!"
              />
            </Carousel.Item>
          </Carousel>
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

export default Home;
