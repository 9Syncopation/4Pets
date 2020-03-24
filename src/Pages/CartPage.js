import React from "react";
import { CartContext } from "../Context/CartContext";
import EmptyCart from "../Components/EmptyCart";
import CartPet from "../Components/CartPet";
import { Link } from "react-router-dom";
// import {UserContext} from '../Context/UsersContext'

export default function Cart() {
  let user = false;
  const { cart, total } = React.useContext(CartContext);
  if (cart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <section className="cart-items section">
      <h2>Your Pets </h2>
      {cart.map(item => {
        return <CartPet key={item.id} {...item} />;
      })}
      <h2> Total : {total} </h2>
      {user ? (
        <Link to="/checkoutPage" className="btn btn-primary btn-block">
          checkout
        </Link>
      ) : (
        <Link to="/Login" className="btn btn-primary btn-block">
          Login
        </Link>
      )}
    </section>
  );
}
