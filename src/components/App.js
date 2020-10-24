import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    let relatives = ["Sujal", "Rajesh", "Amit", "Ankit"];
    return (
      <ol key="relativeList">
        {this.relatives.map((relative, index) => (
          <li key={`relativeListItem${index + 1}`}>{relative}</li>
        ))}
      </ol>
    );
  }
}

export default App;
