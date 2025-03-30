import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Bakery.css";
import photo1 from "../../assets/bakery-photo1.png";
import photo2 from "../../assets/bakery-photo2.png";
import photo3 from "../../assets/bakery-photo3.png";
import photo4 from "../../assets/bakery-photo4.png";
import photo5 from "../../assets/bakery-photo5.png";
import photo6 from "../../assets/bakery-photo6.png";

function SectionItem({ title, tagline }) {
  return (
    <div className="d-flex flex-row">
      <div>
        <h4>{title}</h4>
      </div>
      <div className="align-self-center tagline">
        <small>{tagline}</small>
      </div>
    </div>
  );
}

function MenuItem({ title, description }) {
  return (
    <li>
      <div className="d-flex flex-row">
        <div>
          <b>{title}</b>
        </div>
        <div className="align-self-center tagline">
          <small>{description}</small>
        </div>
      </div>
    </li>
  );
}

function Bakery() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  return (
    <>
      <div className="row">
        <div className="col-3">
          <img src={photo1} />
          <img src={photo2} />
          <img src={photo3} />
        </div>
        {/* PAGE TITLE */}
        <div className="col-6 pt-5">
          <div className="d-flex flex-row">
            <div>
              <h1>Bakery</h1>
            </div>
            <div className="align-self-center tagline">
              <small>Where sweet treats meet wagging tails!</small>
            </div>
          </div>
          {/* HUMAN MENU */}
          <div className="row mt-5">
            <div className="d-flex flex-row">
              <div>
                <h3
                  className="collapse-header"
                  onClick={() => {
                    setIsOpen1(!isOpen1)
                    isOpen1 ? setIsOpen2(false) : ''
                  }}
                >
                  Human Treats
                </h3>
              </div>
              <div className="align-self-center tagline">
                <small>doughnuts, brownies, breads, cookies, pies, cakes</small>
              </div>
            </div>
            <div className="collapse-content">
              <div className={`collapse ${isOpen1 ? "show" : ""}`}>
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
                <SectionItem title="Breads" tagline="Baked fresh with love!" />
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
            </div>
          </div>
          {/* DOG MENU */}
          <div className="row">
            <div className="d-flex flex-row">
              <div>
                <h3
                  className="collapse-header"
                  onClick={() => {
                    setIsOpen2(!isOpen2)
                    isOpen2 ? setIsOpen1(false) : ''
                  }}
                >
                  Dog Treats
                </h3>
              </div>
              <div className="align-self-center tagline">
                <small>pup cups, pupcakes, fresh fruit, biscuits</small>
              </div>
            </div>
            <div className="collapse-content">
              <div className={`collapse ${isOpen2 ? "show" : ""}`}>
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
            </div>
          </div>
        </div>
        <div className="col-3">
          <img src={photo4} />
          <img src={photo5} />
          <img src={photo6} />
        </div>
      </div>
    </>
  );
}

export default Bakery;
