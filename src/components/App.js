import React, { Component } from "react";

import "./css/App.css";
import "./css/InputSection.css";

import Navbar from "./layout/Navbar";
import InputSection from "./main/InputSection";

class App extends Component {
  render() {
    $(document).ready(function () {
      $("body").fadeIn(500);
    });
    return (
      <div>
        <Navbar />
        <div className="container-hero">
          <h1 style={{ marginBottom: "5vw" }}>BMI Calculator</h1>
          <InputSection />
        </div>
      </div>
    );
  }
}

export default App;
