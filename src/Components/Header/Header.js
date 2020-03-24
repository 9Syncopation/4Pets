import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/Img/Logo/4.jpg";
import "./Header.css";

export default function Header() {
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
            <div className="contact-details">
              <div>
                <li>
                  <Link to="/ContactPage"> Contact</Link>
                </li>
              </div>
              <div>
                <li>
                  <Link to="/CartPage"> Cart</Link>
                </li>
              </div>
              <div>
                <li>
                  <Link to="/LoginPage"> Login</Link>
                </li>
              </div>
            </div>
          </div>
        </ul>
      </nav>
    </header>
  );
}
