import React from "react";
import "./Hero.css";

export default function Hero({ children }) {
  return (
    <div className="hero">
      <div className="banner">
        <h1> Care, Adopt & Connect</h1>
        <p>What kind of a person are you?</p>
        {children}
      </div>
     </div>
  );
}
