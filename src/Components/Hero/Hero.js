import React from "react";
import "./Hero.css";

export default function Hero({ children }) {
  return (
    <div className="hero">
      <div className="hero-banner">
        <h1> Care, Adopt & Connect</h1>
        <p>Embrace Your best friend</p>
        {children}
      </div>
     </div>
  );
}
