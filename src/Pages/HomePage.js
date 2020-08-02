import React , {useContext} from 'react';
import {PetsContext} from '../Context/PetsContext';
import Hero from "../Components/Hero/Hero";
import { Link } from "react-router-dom";
import UsersPets from "../Components/FeaturedPets/UsersPets";
import PetsPage from "../Pages/PetsPage";
import PetsList from "../Components/PetsList/PetsList";

export default function HomePage() {
	const {loading, pets} = React.useContext(PetsContext)
  return (
    <>
      <Hero>
        <div className="display-flex row space-evenly">
          <Link to="PetsPage" className="btn btn-hero">
            {" "}
            Cat
          </Link>
          <br />
          <Link to="PetsPage" className="btn btn-hero">
            {" "}
            Dog
          </Link>
        </div>
	  </Hero>
	  <PetsList title = 'Our Lovely Cats' pets ={pets}></PetsList>
      <UsersPets></UsersPets>
    </>
  );
}
