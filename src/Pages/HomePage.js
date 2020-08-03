import React, { useContext } from "react";
import { PetsContext } from "../Context/PetsContext";
import Hero from "../Components/Hero/Hero";
import { Link } from "react-router-dom";
import UsersPets from "../Components/FeaturedPets/UsersPets";
import PetsPage from "../Pages/PetsPage";
import PetsList from "../Components/PetsList/PetsList";
import CatClipArt from "../Assets/Img/Views/cat.png";
import DogClipArt from "../Assets/Img/Views/dogclipart.png";
// import Parallax from "../Components/Parallax"

import "./HomePage.css";

export default function HomePage() {
  const { loading, pets } = React.useContext(PetsContext);
  return (
    <>
      <Hero>
        <div
          data-aos="zoom-in-down"
          data-aos-easing="ease-in-sine"
          data-aos-delay="500"
          className="person-lover display-flex column  space-evenly"
        >
          <div className=" display-flex column ">
            <Link to="PetsPage" className="btn btn-hero">
              {" "}
              Cat Lover
            </Link>
          </div>
          <br />
		  <div className="display-flex column ">

            <Link to="PetsPage" className="btn btn-hero">
              {" "}
              Dog Person
            </Link>
          </div>
        </div>
	  </Hero>
	  
    </>
  );
}

// <PetsList title = 'Our Lovely Cats' pets ={pets}></PetsList>
// <UsersPets></UsersPets>
