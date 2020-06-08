import React from "react";
// import logo from "./logo.svg";
import "./App.css";
// import Preloader from "./components/preloader";
import Navbar from "./components/navbar";
import Welcome from "./components/welcome";
import About from "./components/about";
import Testimonial from "./components/testimonial";
import Contact from "./components/contact";
import $ from "jquery";
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <p>Website under Construction :)</p>
        <a
          className="App-link"
          href="http://g33kzd3n.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          know more
        </a>
      </header> */}
      {/* <Preloader></Preloader> */}
      <Navbar></Navbar>
      <Welcome></Welcome>
      <About></About>
      <Testimonial></Testimonial>
      <Contact></Contact>
    </div>
  );
}

export default App;
