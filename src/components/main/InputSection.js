import React, { Component } from "react";

export default class InputSection extends Component {
  state = {
    height: "",
    weight: "",
  };

  onChange = (e) => {
    if (e.target.value > 450 || e.target.value < 1) {
      this.setState({ [e.target.name]: "" });
    } else {
      this.setState({ [e.target.name]: parseInt(e.target.value, 10) });
    }
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.weight != "" && this.state.height != "") {
      var result = Math.round(
        (this.state.weight / Math.pow(this.state.height, 2)) * 10000
      );
      result = Math.round(result * 100) / 100;
      let resultElement = document.getElementById("result");

      resultElement.style.marginTop = "1em";
      document.getElementById("submit").style.marginTop = "3em";

      if (result < 18.5) {
        resultElement.style.color = "#fb9300";
      } else if (result >= 18.5 && result < 25) {
        resultElement.style.color = "#4caf50";
      } else if (result >= 25 && result < 30) {
        resultElement.style.color = "#fb9300";
      } else if (result >= 30) {
        resultElement.style.color = "#f54748";
      }
      resultElement.innerHTML = "Result: " + result;
    }
  };

  render() {
    const { height, weight } = this.state;
    return (
      <div className="inputDiv">
        <input
          type="number"
          id="height"
          name="height"
          placeholder="Height (cm)"
          min="1"
          max="450"
          onChange={this.onChange}
          value={height}
        ></input>
        <input
          type="number"
          id="weight"
          name="weight"
          placeholder="Weight (kg)"
          min="1"
          max="450"
          onChange={this.onChange}
          value={weight}
        ></input>

        <h3 id="result"></h3>

        <input
          id="submit"
          type="submit"
          value="Submit"
          onClick={this.onSubmit}
        ></input>

        <h4 style={{ color: "#fb9300", fontWeight: "400", fontWeight: "400" }}>
          Underweight - Below 18.5
        </h4>
        <h4 style={{ color: "#4caf50", marginTop: "0.1em", fontWeight: "400" }}>
          Normal - Between 18.5 and 24.9
        </h4>
        <h4 style={{ color: "#fb9300", marginTop: "0.1em", fontWeight: "400" }}>
          Overweight - Between 25 and 29.9
        </h4>
        <h4 style={{ color: "#f54748", marginTop: "0.1em", fontWeight: "400" }}>
          Obese - Over 30
        </h4>
      </div>
    );
  }
}
