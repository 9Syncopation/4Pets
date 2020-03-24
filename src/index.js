import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import PetsProvider from "./Context/PetsContext";
import {CartProvider} from './Context/CartContext'

ReactDOM.render(
  <PetsProvider>
  <CartProvider>
    <Router>
      <App />
    </Router>
  </CartProvider>
  </PetsProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
