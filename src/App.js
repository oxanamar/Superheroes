import React from "react";
import Card from "./components/Card";
import "./index.css";
import heroesList from "./heroesData";

function App() {
  return (
    <div className="container">
      <Card heroes={heroesList} />
    </div>
  );
}

export default App;
