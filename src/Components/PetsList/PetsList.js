import React from "react";
import PetsCard from "../PetsCard/PetsCard";
import Masonry from "react-masonry-css";
import "./PetsList.css"

export default function PetsList({ title, pets }) {
	const breakpointColumnsObj = {
		default: 4,
		1100: 3,
		700: 2,
		500: 1
	  };
  return (
	  <section data-aos="fade-right"
	  data-aos-offset="300"
	  data-aos-delay="50"
	  data-aos-duration="1000"

	  data-aos-easing="ease-in-sine"
	  data-aos-anchor=".other-element" className="section">
	  <h2 className="section-title"> {title}</h2>
	  <div >
	  <Masonry
	  ata-aos="fade-right"
	  data-aos-offset="300"
	  data-aos-delay="50"
	  data-aos-easing="ease-in-sine"
	  data-aos-anchor=".other-element"
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
	  >
	  
	  {pets.map((item) => {
		  return <PetsCard key={item.id} {...item} />;
		})}
		
		</Masonry>
		</div>
		  </section>
  );
}
