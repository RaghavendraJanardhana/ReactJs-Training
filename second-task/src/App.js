import React from "react";
import "./App.css";
import "./style.css";
import Header from "./components/Header";
import Slider from "./components/Slider";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import OurClient from "./components/OurClient";
import Contact from "./components/Contact";
//import GoogleMap from "./components/GoogleMap";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <About />
      <Services />
      <Portfolio />
      <Team />
      <Testimonials />
      <OurClient />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
