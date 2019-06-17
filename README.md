1. create-react-app react03
2. Delete all inside return( ); in App.js
3. create card folder in src (card component folder)
4. create card.js and card.css
5. save image.png in card folder
6. Change .App class in App.css to
```css
    .App {
    text-align: center;
    margin: auto;
    }
```

## card.js contents
```javascript
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
```

## card.css contents
```css
.card {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 10%;
    display: inline-block;
    margin: 20px 0px 0px 20px;
  }
  
  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
  
  .container {
    padding: 2px 16px;
  }
```