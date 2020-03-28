import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/Img/Logo/4.jpg";
import CartLink from "../CartLink";
import {UserContext} from "../../Context/UserContext";
import LoginLink from "../LoginLink";

import "./Header.css";

export default function Header() {
  const {user} = React.useContext(UserContext)
  return (
    <header className="header">
      <img src={logo} alt="LOGO" className="logo" />
      <nav>
        <ul>
          <div className="main-menu">
            <div>
              <li>
                <Link to="/"> Home</Link> 
              </li>
            </div>
            <div>
              <li>
                <Link to="/About"> About</Link>
              </li>
            </div>
            <div>
              <li>
                <Link to="/PetsPage"> All Pets</Link>
              </li>
            </div>
            <div>
              <li>
                <Link to="/UserPets"> My Pets</Link>
              </li>
            </div>

             {user.token && (<div>
                    <li>
                      <Link to="/CheckoutPage"> Checkout</Link>
                    </li>
                  </div>)}

            <div className="contact-details">
              <div>
                <li>
                  <Link to="/ContactPage"> Contact</Link>
                </li>
              </div>
              <div>
                <LoginLink></LoginLink>
                <CartLink></CartLink>
              </div>
             {/*}
              <div>
                <li>
                  <Link to="/LoginPage"> Login</Link>
                </li>
             </div>*/}
            </div>
          </div>
        </ul>
      </nav>
    </header>
  );
}
