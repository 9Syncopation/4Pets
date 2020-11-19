import React from "react";
import reducer from "./reducer";
import { REMOVE, INCREASE, DECREASE, ADD_TO_CART, CLEAR_CART } from "./action";
// import LocalCart from '../Utils/LocalCart'
// import {PetsContext} from './PetsContext'
function getCartFromLocalStorage() {
  return localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
}
const CartContext = React.createContext();

function CartProvider({ children }) {
  // const {pets} = React.useContext(PetsContext)
  // const [cart, setCart] = React.useState(getCartFromLocalStorage());

  //SETUP USER-REDUCER
  // cart = state
  //did not change due to the use at useEffect
  const [cart, dispatch] = React.useReducer(reducer, getCartFromLocalStorage());
  const [total, setTotal] = React.useState(0);
  const [cartItem, setCartItems] = React.useState(0);
  //console.log("cart context ***!!!", cart);
  //console.log("cart context Items ***!!!", cartItem);
  //console.log('pets***!!!',pets);

  //useEffect to watch changes at the cart
  React.useEffect(() => {
    //Local storage
    localStorage.setItem("cart", JSON.stringify(cart));
    //calculating cart items( //total => acc  //cartItems => curr)
    let newCartItems = cart.reduce((total, cartItems) => {
      console.log("total & cartItems", total, "cart itmes", cartItems.amount);
      return (total += cartItems.amount);
    }, 0);
    setCartItems(newCartItems);
    console.log("cart item", newCartItems);
    //Cart total
    let newTotal = cart.reduce((total, cartItems) => {
      return (total += cartItems.amount);
      // return total+= (cartItems.amount * cartItems.price)
    }, 0);
    console.log("newTotal", newTotal);
    // to  2 decimals
    newTotal = parseFloat(newTotal.toFixed(2));
    setTotal(newTotal);
    // only Run When something updated at the Cart
  }, [cart]);
  //filter the cart and return only one does not match the id
  const removeItem = (id) => {
    // let newCart = [...cart].filter(item => item.id !== id)
    // setCart(newCart)
    //change to reducer >>>
    // setCart([...cart].filter((item) => item.id !== id));
    dispatch({ type: REMOVE, payload: id });
  };
  const increaseAmount = (id) => {
    //change to reducer >>>
    // const newCart = [...cart].map((item) => {
    //   return item.id === id
    //  ? { ...item, amount: item.amount + 1 }
    //     : { ...item };
    // });
    // setCart(newCart);
    dispatch({ type: INCREASE, payload: id });

    //   // if( item.id === id){
    //   //    let newcart ={...item , amount: (item.amount + 1)}
    //   //    return newcart
    //   // }else{
    //   //     return {...item}
    //   // }
  };
  const decreaseAmount = (id, amount) => {
    //change to reducer >>>
    if (amount === 1) {
      //   removeItem(id);
      dispatch({ type: REMOVE, payload: id });
    } else {
      dispatch({ type: DECREASE, payload: id });
      //   let newCart = [...cart].map((item) => {
      //     return item.id === id
      //       ? { ...item, amount: item.amount - 1 }
      //       : { ...item };
      //   });
      //   setCart(newCart);
    }
  };
  const addToCart = (pet) => {
    //change to reducer >>>
    let item = [...cart].find((item) => item.id === pet.id);
    if (item) {
      dispatch({ type: INCREASE, payload: pet.id });
    } else {
      dispatch({ type: ADD_TO_CART, payload: pet });
    }
    //     const { id, name, gender, image } = pet;
    //     const item = [...cart].find((item) => item.id === id);
    //     if (item) {
    //       increaseAmount(id);
    //       return;
    //     } else {
    //       const newItem = { id, name, gender, image, amount: 1 };
    //       const newCart = [...cart, newItem];
    //       setCart(newCart);
    //       console.log("newCart", newCart);
    //     }
  };
  const clearCart = () => {
    //change to reducer >>>
    dispatch({ type: CLEAR_CART });
    //     setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        cartItem,
        removeItem,
        increaseAmount,
        decreaseAmount,
        addToCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
