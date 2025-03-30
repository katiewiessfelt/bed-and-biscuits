import Header from './Header/Header'
import Footer from './Footer/Footer'
import Home from './Home/Home'
import Hero from './Hero/Hero'
import Bakery from "./Bakery/Bakery";
// import Boarding from "./Boarding/Boarding";
// import About from "./About/About";
// import Members from "./Members/Members";
import './App.css'
import { Routes, Route, useLocation } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  const location = useLocation();
  const showHero = location.pathname === "/";
  return (
    <div>
      {showHero && <Hero/>}
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bakery" element={<Bakery />} />
        {/* <Route path="/menu" element={<Menu />} /> */}
        {/* <Route path="/boarding" element={<Boarding />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/members" element={<Members />} /> */}
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;