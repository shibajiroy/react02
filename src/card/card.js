import React from "react";
import image from "./img_avatar.png"; // import image file as data
import "./card.css"; // import card style

// Create Card Component
function Card(props) {
  return (
    <div className="card">
    <img src={image} alt="Avatar" style={{ width: "100%" }} />
    <div className="container">
      <h4>
        <b>{props.name}</b>
      </h4>
      <p>{props.job}</p>
    </div>
  </div>
  );
}

// Export Card Component
export default Card;