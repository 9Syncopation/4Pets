import React from "react";
import { Link } from "react-router-dom";

export default function PetsCard({ image, title, id, price }) {
  //TODO set up the card properly
  const url = image.url;
  return (
    <article className="product">
      <div className="ing-container">
        <img src={url} alt={title} />
        <Link
          to={`SinglePetPage/${id}`}
          className="btn btn-primary product-link"> Details</Link>
      </div>
     <div className =" product-footer">
     <p className="product-title">{title}</p>
     <p className="product-price">${price}</p>
     </div> 
    </article>
  );
}
