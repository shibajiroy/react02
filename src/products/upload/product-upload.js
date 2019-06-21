import React, { useState } from "react";
import "./style.css";
import firebase from "../../firebase";
import UploadFile from "../../storage";

function ProductUpload() {
  const [prodName, updateProdName] = useState("");
  const [prodPrice, updateProdPrice] = useState(0);
  const [prodImage, updateProdImage] = useState(null);

  return (
    <div className="uploadForm">
      <form>
        <div className="form-group">
          <label htmlFor="prodName">Name: </label>
          <input
            type="text"
            className="form-control"
            name="prodName"
            onChange={e => updateProdName(e.target.value)}
            value={prodName}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Price</label>
          <input
            name="prodPrice"
            type="number"
            onChange={e => updateProdPrice(e.target.value)}
            value={prodPrice}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="imageFile">Image File: </label>
          <input
            name="prodFile"
            type="file"
            onChange={e => updateProdImage(e.target.files[0])}
            className="form-control"
          />
        </div>
        <input
          type="button"
          className="btn btn-primary"
          value="Submit"
          onClick={() =>
            submit(
              {
                name: prodName,
                price: prodPrice
              },
              prodImage
            )
          }
        />
      </form>
    </div>
  );
}

function submit(data, image) {
  if (image) {
    const db = firebase.firestore();
    db.collection("products")
      .add(data)
      .then(file =>
        UploadFile(file.id, image, {
          contentType: "image/jpeg"
        })
      );
  }
}
export default ProductUpload;
