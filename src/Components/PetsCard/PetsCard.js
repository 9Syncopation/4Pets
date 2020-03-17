import React from "react";
import { Link } from "react-router-dom";

export default function PetsCard({ image, name, gender, id, description }) {
  //TODO set up the card properly
  // const url = image.url;
  console.log('image extraction',image);
  
  return (
    <article className="product">
      <div className="img-container">
      <p className="product-title">{name}</p>
     
        {/*<img src={image} alt={name} />*/}
        <img src={`http://placekitten.com/200/${id}00`} alt="imag"/>
        {/*<img src={"../../"} alt="imag"/> */}
        <Link
          to={`SinglePetPage/${id}`}
          className="btn btn-primary product-link"> Details</Link>
      </div>
     <div className ="product-footer">
     <p className="product-title">{gender}</p>
     <p className="product-price">{description}</p>
     </div> 
    </article>
  );
}
