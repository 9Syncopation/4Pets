import React 
// ,{useContext} 
from 'react';
import {PetsContext} from '../Context/PetsContext';
import Loading from '../Components/Loading/Loading';
import PetsList from '../Components/PetsList/PetsList';
// import MyCarousel from '../Components/Carousel'
import "./PetsPage.css";

export default function PetsPage() {
   const {loading, pets} = React.useContext(PetsContext)
   if (loading) {
	   return <Loading></Loading>
	}
	
	// <MyCarousel></MyCarousel>
	return <>
	<div className ="hero-pets-page"></div>
    <PetsList title = 'Our Lovely Cats' pets ={pets}/>
   </>
}
