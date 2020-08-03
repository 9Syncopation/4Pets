import React from "react";
import { CartContext } from "../Context/CartContext";
import { UserContext } from "../Context/UserContext";
import EmptyCart from "../Components/EmptyCart";
import CartPet from "../Components/CartPet";
import { Link } from "react-router-dom";
// import {UserContext} from '../Context/UsersContext'

export default function Cart() {
  const { cart, total } = React.useContext(CartContext);
  const { user } = React.useContext(UserContext);
  console.log('cart from!!!!!!***',cart);
  
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
      {user.token ? (
        <Link to="/CheckoutPage" className="btn btn-primary btn-block">
          checkout
        </Link>
      ) : (
        <Link to="/LoginPage" className="btn btn-block adopt">
          Login
        </Link>
      )}
    </section>
  );
}
