import React from 'react';
import PetsCard from '../PetsCard/PetsCard';

export default function PetsList({title, pets}) {
    return <section className="section">
    <h2 className="section-title"> {title}</h2>
    <div className="pets-center">
        {pets.map(item => {
           return <PetsCard key= {item.id} {...item}/>
        })}
    </div>
    </section>
}
