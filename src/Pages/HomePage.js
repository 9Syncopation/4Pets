import React from "react";
import Hero from "../Components/Hero/Hero";
import { Link } from "react-router-dom";
import UsersPets from "../Components/FeaturedPets/UsersPets";

export default function HomePage() {
  return (
    <>
      <Hero>
        <Link to="PetsPage" className="btn btn-hero">
          {" "}
          Find Your loved Cat
        </Link>
        <br/>
        <Link to="PetsPage" className="btn btn-hero">
          {" "}
          More Of a Dog Person?
        </Link>
      </Hero>
      <UsersPets></UsersPets>
    </>
  );
}
