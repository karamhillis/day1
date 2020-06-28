import React from "react";
import "./amz.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={require("./amz.jpg")} alt="logo" className="amaz" />
        <input className="search"></input>
      </header>
    </div>
  );
}

export default App;
