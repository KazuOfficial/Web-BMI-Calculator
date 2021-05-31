import React, { Component } from "react";

export default class InputSection extends Component {
  render() {
    return (
      <div className="inputDiv">
        <input
          type="number"
          id="fheight"
          name="fheight"
          placeholder="Weight..."
          min="1"
          max="1000"
        ></input>
        <input
          type="number"
          id="fheight"
          name="fheight"
          placeholder="Height..."
          min="1"
          max="1000"
        ></input>

        <h3></h3>

        <input type="submit" value="Submit"></input>

        <h4 style={{ color: "#fb9300" }}>Underweight - Less than 18.5</h4>
        <h4 style={{ color: "#4caf50", marginTop: "0.1em" }}>
          Normal - Between 18.5 - 24.44
        </h4>
        <h4 style={{ color: "#fb9300", marginTop: "0.1em" }}>
          Overweight - Between 25 - 29.99
        </h4>
        <h4 style={{ color: "#f54748", marginTop: "0.1em" }}>
          Obese - Over 30
        </h4>
      </div>
    );
  }
}
