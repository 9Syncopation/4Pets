import React from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

export default function CartLink() {
  const { cartItem } = React.useContext(CartContext);

  return (
    <div className="cart-link-container">
      <Link to="/CartPage">Adoptions</Link>
      <span className="cart-link-total">{cartItem}</span>
    </div>
  );
}