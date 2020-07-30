import React from "react";
import PetsCard from "../PetsCard/PetsCard";
import Masonry from "react-masonry-css";
import "./PetsList.css"

export default function PetsList({ title, pets }) {
  return (
	  <section className="section">
	  <h2 className="section-title"> {title}</h2>
	  <Masonry
      breakpointCols={2}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
	  >
        
          {pets.map((item) => {
            return <PetsCard key={item.id} {...item} />;
          })}
		  
		  </Masonry>
		  </section>
  );
}
