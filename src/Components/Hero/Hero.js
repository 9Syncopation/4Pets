import React from "react";
import "./Hero.css";

export default function Hero({ children }) {
  return (
	<div className="hero">
	
	<div data-aos="zoom-in-down"
	data-aos-offset="300"
	data-aos-easing="ease-in-sine" className="banner">
	<h1> Care, Adopt & Connect</h1>
	<p>Are you?</p>
	{children}
	</div>
	
     </div>
  );
}
