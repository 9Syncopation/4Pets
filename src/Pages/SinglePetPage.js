import React from 'react';
import {useParams} from 'react-router-dom';
import {PetsContext} from '../Context/PetsContext'
import {useHistory} from 'react-router-dom'
import Loading from '../Components/Loading/Loading';

export default function SinglePetPage() {
    const {id} = useParams();
    const history = useHistory()
    const {pets} = React.useContext(PetsContext)
    const pet = pets.find(item => item.id === parseInt(id))
    if(pets.length === 0 ){
        return <Loading/>
    }else{
        const {image, name, description, shelterDescription} = pet
        console.log('strapi pets', pet);
        
        return (
            <section className="single-product">
                <img src={image} alt={name} className="single-product-image"/>
                <img src={`http://placekitten.com/200/${id}00`} alt={name} className="single-product-image"/>
                <article>
                <h1> {name}</h1>
                <h2> {description}</h2>
                <p>{shelterDescription}</p>
                <button className="btn btn-primary btn-block" onClick ={
                    ()=> {
                        //go to transaction, details, agreement
                        history.push('/cart')
                    }
                }>Adopt//Support </button>
                </article>
            </section>
            )
    }
}
