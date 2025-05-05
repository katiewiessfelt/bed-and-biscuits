import { useState, useEffect } from "react";
import Fade from "react-bootstrap/Fade";
import { useLocation } from "react-router-dom";
import Collapse from "react-bootstrap/Collapse";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Bakery.css";
import photo1 from "../../assets/bakery-photo1.png";
import photo2 from "../../assets/bakery-photo2.png";
import photo3 from "../../assets/bakery-photo3.png";
import photo4 from "../../assets/bakery-photo4.png";
import photo5 from "../../assets/bakery-photo5.png";
import photo6 from "../../assets/bakery-photo6.png";
import photo7 from "../../assets/bakery-photo7.jpg";
import photo8 from "../../assets/bakery-photo8.jpg";
import photo9 from "../../assets/bakery-photo9.jpg";
import photo10 from "../../assets/bakery-photo10.jpg";

function SectionItem({ title, tagline }) {
  return (
    <div className="d-flex flex-row">
      <div className="align-self-center">
        <h4>{title}</h4>
      </div>
      <div className="align-self-center">
        <p className="fs-6 mb-0 tagline2">{tagline}</p>
      </div>
    </div>
  );
}

function MenuItem({ title, description }) {
  return (
    <li>
      <div className="d-flex flex-row">
        <div>
          <p>
            {title} - <i>{description}</i>
          </p>
        </div>
      </div>
    </li>
  );
}

function Bakery() {
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);
  const [isOpen3, setIsOpen3] = useState(true);

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
      <div className="row d-flex" id="bakery">
        <div className="col-3 photo-gutter">
          <img src={photo1} />
          <img src={photo2} />
          <img src={photo3} />
          <img src={photo4} />
          <img src={photo5} />
        </div>
        {/* PAGE TITLE */}
        <div className="col-6 pt-5 bakery-menu">
          <div className="d-flex flex-column">
            <h1>Bakery</h1>
            <p>Where sweet treats meet wagging tails!</p>
          </div>
          {/* SPECIALS MENU */}
          <div className="row mt-4">
            <div className="d-flex flex-row">
              <div className="d-flex align-items-center">
                <h3
                  className="collapse-header mb-0"
                  onClick={() => setIsOpen1(!isOpen1)}
                  aria-controls="specials-treats-menu"
                  aria-expanded={isOpen1}
                  id="bakery-specials"
                >
                  Specials
                </h3>
              </div>
              <div className="d-flex align-items-center" width="100%">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => setIsOpen1(!isOpen1)}
                  className={isOpen1 ? "rotate icon" : "icon"}
                  viewBox="0 0 320 512"
                  fill="#c39f77"
                >
                  <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                </svg>
              </div>
              <div className="d-flex align-items-center tagline">
                <Fade in={!isOpen1}>
                  <p className="mb-0">
                    <i>Treats of the Week - Paws Down Delicious!</i>
                  </p>
                </Fade>
              </div>
            </div>
            {isOpen1 ? (
              <Collapse in={isOpen1}>
                <div id="specials-menu-content">
                  <SectionItem
                    title="Bark & Bite Combo"
                    tagline="Come in and enjoy this tail-waggingly good pairing! 🐾☕️🍩"
                  />
                  <ul>
                    <MenuItem
                      title="For the Humans"
                      description="Vanilla Bean Latte (hot or iced) Homemade Blueberry Scone topped with a light lemon glaze"
                    />
                    <MenuItem
                      title="For the Pups"
                      description="Puppy Latte (whipped cream with a sprinkle of crumbled dog treats) and Peanut Butter Pupcake made with dog-safe ingredients, topped with a carob 'frosting'"
                    />
                  </ul>

                  <SectionItem
                    title="Tail-Wagging Treat Duo"
                    tagline="Because chilly days are better with a warm drink and a happy pup! 🐾"
                  />
                  <ul>
                    <MenuItem
                      title="For the Humans"
                      description="A Warm Vanilla Chai Latte, infused with comforting spices, paired with a Buttery Almond Croissant for a flaky, nutty treat"
                    />
                    <MenuItem
                      title="For the Pups"
                      description="A Pumpkin Spice Pup Cup (whipped goat's milk with a sprinkle of cinnamon) and a Peanut Butter & Oat Biscuit, baked fresh with all-natural ingredients"
                    />
                  </ul>

                  <SectionItem
                    title="Paw-ty Celebration Special"
                    tagline="Because every birthday (or gotcha day!) deserves a shared treat! 🎂"
                  />
                  <ul>
                    <li className="pb-2">
                      <i>(Pre-Order Only)</i>
                    </li>
                    <MenuItem
                      title="For the Humans"
                      description="A Slice of Decadent Chocolate Cake and a Cup of Freshly Brewed Espresso for the perfect pairing"
                    />
                    <MenuItem
                      title="For the Pups"
                      description="A Mini Peanut Butter Pupcake, topped with dog-safe yogurt “frosting,” and a Refreshing Goat's Milk & Honey Drink."
                    />
                  </ul>
                </div>
              </Collapse>
            ) : (
              ""
            )}
          </div>
          {/* HUMAN MENU */}
          <div className="row mt-4">
            <div className="d-flex flex-row">
              <div className="d-flex align-items-center">
                <h3
                  className="collapse-header mb-0"
                  onClick={() => setIsOpen2(!isOpen2)}
                  aria-controls="human-treats-menu"
                  aria-expanded={isOpen2}
                  id="human-treats"
                >
                  Human Treats
                </h3>
              </div>
              <div className="d-flex align-items-center" width="100%">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => setIsOpen2(!isOpen2)}
                  className={isOpen2 ? "rotate icon" : "icon"}
                  viewBox="0 0 320 512"
                  fill="#c39f77"
                >
                  <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                </svg>
              </div>
              <div className="d-flex align-items-center tagline">
                <Fade in={!isOpen2}>
                  <p className="mb-0">
                    <i>doughnuts, brownies, breads, cookies, pies, cakes</i>
                  </p>
                </Fade>
              </div>
            </div>
            {isOpen2 ? (
              <Collapse in={isOpen2}>
                <div id="human-menu-content">
                  <SectionItem
                    title="Doughnuts"
                    tagline="Light, fluffy, and made fresh daily!"
                  />
                  <ul>
                    <MenuItem
                      title="Classic Glazed"
                      description="A simple, sweet, and perfectly glazed doughnut"
                    />
                    <MenuItem
                      title="Chocolate Frosted"
                      description="A soft doughnut topped with rich chocolate icing"
                    />
                    <MenuItem
                      title="Maple Bacon"
                      description="Sweet maple glaze with crispy bacon crumbles"
                    />
                    <MenuItem
                      title="Cinnamon Sugar"
                      description="Coated in a perfect blend of cinnamon and sugar"
                    />
                    <MenuItem
                      title="Jelly-Filled"
                      description="Classic doughnut filled with sweet berry jam"
                    />
                  </ul>

                  <SectionItem
                    title="Brownies"
                    tagline="Rich, fudgy, and packed with flavor!"
                  />
                  <ul>
                    <MenuItem
                      title="Classic Fudge"
                      description="Dense, chewy, and extra chocolatey"
                    />
                    <MenuItem
                      title="Salted Caramel"
                      description="Topped with gooey caramel and a hint of sea salt"
                    />
                    <MenuItem
                      title="Peanut Butter Swirl"
                      description="A chocolate brownie swirled with creamy peanut butter"
                    />
                    <MenuItem
                      title="Espresso Brownie"
                      description="A rich chocolate brownie with a hint of espresso"
                    />
                  </ul>

                  <SectionItem
                    title="Breads"
                    tagline="Baked fresh with love!"
                  />
                  <ul>
                    <MenuItem
                      title="Banana Walnut Bread"
                      description="Moist banana bread with crunchy walnuts"
                    />
                    <MenuItem
                      title="Cinnamon Swirl Loaf"
                      description="Sweet cinnamon-infused bread, perfect"
                    />
                    <MenuItem
                      title="Sourdough"
                      description="Crispy on the outside, soft on the inside"
                    />
                    <MenuItem
                      title="Rosemary Garlic Focaccia"
                      description="Light, airy, and full of flavor"
                    />
                  </ul>

                  <SectionItem
                    title="Cookies"
                    tagline="Crunchy, chewy, and full of goodness!"
                  />
                  <ul>
                    <MenuItem
                      title="Chocolate Chip"
                      description="Classic, buttery, and loaded with chocolate chips"
                    />
                    <MenuItem
                      title="Oatmeal Raisin"
                      description="Soft, chewy, and perfectly spiced"
                    />
                    <MenuItem
                      title="Peanut Butter"
                      description="A rich peanut butter cookie with a soft center"
                    />
                    <MenuItem
                      title="Snickerdoodle"
                      description="Soft, cinnamon-sugar coated perfection"
                    />
                    <MenuItem
                      title="White Chocolate Macadamia"
                      description="Buttery cookie with white chocolate & macadamia nuts"
                    />
                  </ul>

                  <SectionItem
                    title="Pies"
                    tagline="Made with the freshest ingredients!"
                  />
                  <ul>
                    <MenuItem
                      title="Classic Apple Pie"
                      description="Cinnamon-spiced apples in a flaky crust"
                    />
                    <MenuItem
                      title="Blueberry Crumble"
                      description="Sweet blueberries with a crunchy oat topping"
                    />
                    <MenuItem
                      title="Pecan Pie"
                      description="Rich, nutty, and packed with caramelized pecans"
                    />
                    <MenuItem
                      title="Chocolate Silk"
                      description="Silky smooth chocolate in a buttery crust"
                    />
                  </ul>

                  <SectionItem
                    title="Cakes"
                    tagline="Perfect for any occasion!"
                  />
                  <ul>
                    <MenuItem
                      title="Vanilla Bean"
                      description="Classic vanilla cake with creamy buttercream"
                    />
                    <MenuItem
                      title="Double Chocolate"
                      description="Rich chocolate cake with chocolate ganache"
                    />
                    <MenuItem
                      title="Lemon Raspberry"
                      description="Zesty lemon cake with fresh raspberry filling"
                    />
                    <MenuItem
                      title="Carrot Cake"
                      description="Moist spiced cake with cream cheese frosting"
                    />
                    <MenuItem
                      title="Red Velvet"
                      description="Smooth, velvety cake with a hint of cocoa"
                    />
                  </ul>
                </div>
              </Collapse>
            ) : (
              ""
            )}
          </div>
          {/* DOG MENU */}
          <div className="row pt-4">
            <div className="d-flex flex-row">
              <div>
                <h3
                  className="collapse-header mb-0"
                  onClick={() => setIsOpen3(!isOpen3)}
                  aria-controls="dog-menu-content"
                  aria-expanded={isOpen3}
                  id="dog-treats"
                >
                  Dog Treats
                </h3>
              </div>
              <div className="d-flex align-items-center" width="100%">
                <svg
                  onClick={() => setIsOpen3(!isOpen3)}
                  xmlns="http://www.w3.org/2000/svg"
                  className={isOpen3 ? "rotate icon" : "icon"}
                  viewBox="0 0 320 512"
                  fill="#c39f77"
                >
                  <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                </svg>
              </div>
              <div className="align-self-center tagline">
                <Fade in={!isOpen3}>
                  <p className="mb-0">
                    <i>pup cups, pupcakes, fresh fruit, biscuits</i>
                  </p>
                </Fade>
              </div>
            </div>
            {isOpen3 ? (
              <Collapse in="isOpen3">
                <div id="dog-menu-content">
                  <SectionItem
                    title="Pup Cups"
                    tagline="Cool, creamy, and pup-approved!"
                  />
                  <ul>
                    <MenuItem
                      title="Peanut Butter & Banana"
                      description="A creamy blend of peanut butter and banana"
                    />
                    <MenuItem
                      title="Pumpkin & Oat"
                      description="Made with fresh pumpkin and wholesome oats"
                    />
                    <MenuItem
                      title="Blueberry Yogurt"
                      description="A refreshing mix of blueberries and yogurt"
                    />
                  </ul>

                  <SectionItem
                    title="Pupcakes"
                    tagline="Mini cupcakes made for dogs!"
                  />
                  <ul>
                    <MenuItem
                      title="Sweet Potato & Honey"
                      description="Lightly sweetened with natural honey"
                    />
                    <MenuItem
                      title="Apple & Oat"
                      description="Made with real apples and healthy oats"
                    />
                    <MenuItem
                      title="Carrot & Peanut Butter"
                      description="A soft cake with a peanut butter drizzle"
                    />
                  </ul>

                  <SectionItem
                    title="Fresh Fruit"
                    tagline="A naturally sweet snack!"
                  />
                  <ul>
                    <MenuItem
                      title="Sliced Apples (No Seeds)"
                      description="Crunchy, fresh apple slices"
                    />
                    <MenuItem
                      title="Banana Bites"
                      description="Soft banana slices, perfect for pups"
                    />
                    <MenuItem
                      title="Frozen Watermelon Cubes"
                      description="A refreshing summer treat"
                    />
                    <MenuItem
                      title="Blueberry Mix"
                      description="Fresh and juicy blueberries for an antioxidant boost"
                    />
                  </ul>

                  <SectionItem
                    title="Biscuits"
                    tagline="Crunchy, homemade, and full of flavor!"
                  />
                  <ul>
                    <MenuItem
                      title="Peanut Butter & Oat"
                      description="A classic, tail-wagging favorite"
                    />
                    <MenuItem
                      title="Chicken & Rice"
                      description="A protein-packed treat for happy pups"
                    />
                    <MenuItem
                      title="Pumpkin & Flaxseed"
                      description="Great for digestion and a shiny coat"
                    />
                    <MenuItem
                      title="Cheddar & Bacon"
                      description="Savory and irresistible!"
                    />
                  </ul>
                </div>
              </Collapse>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="col-3 photo-gutter">
          <img src={photo6} />
          <img src={photo7} />
          <img src={photo8} />
          <img src={photo9} />
          <img src={photo10} />
        </div>
      </div>
    </>
  );
}

export default Bakery;
