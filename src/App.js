import React from "react";
import "./App.css";
import Header from "./components/header/header.component";
import About from "./components/about/about.component";
import Contagion from "./components/contagion/contagion.component";
import Symptomp from "./components/symptomp/symptomp.component";
import Precaution from "./components/precaution/precaution.component";
import Map from "./components/map/map.component";
import Contact from "./components/contact/contact.component";
import Footer from "./components/footer/footer.component";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Contagion />
      <Symptomp />
      <Precaution />
      <Map />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
