import React from "react";
import "./App.css";
import Card from "./card/card";





function App() {
  return (
    <div className='App'>
      <Card name="john Doe1" job="Engineer" />
      <Card name="john Doe2" job="Engineer" />
      <Card name="john Doe3" job="Engineer" />
      <Card name="john Doe4" job="Engineer" />
      <Card name="john Doe5" job="Engineer" />
    </div>
  );
}

export default App;
