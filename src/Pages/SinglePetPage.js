import React from 'react';
import {useParams} from 'react-router-dom';
import {PetsContext} from '../Context/PetsContext'
import {CartContext} from '../Context/CartContext'
import {useHistory} from 'react-router-dom'
import Loading from '../Components/Loading/Loading';

export default function SinglePetPage() {
    const {id} = useParams();
    const history = useHistory()

    const {pets} = React.useContext(PetsContext)
    const {addToCart} = React.useContext(CartContext)
    const pet = pets.find(item => item.id === parseInt(id))
    if(pets.length === 0 ){
        return <Loading/>
    }else{
        const {image, name, gender, description, shelterDescription} = pet
        console.log('strapi pets', pet);
        
        return (
            <section className="single-product">
        {/* <img src={image} alt={name} className="single-product-image"/>*/}
                <img src={image} alt={name} className="single-product-image"/>
                <article>
                <h1> {name}</h1>
                <h3> {gender}</h3>
                <h6> {description}</h6>
                <h3><strong>Our Shelter:</strong></h3><p>{shelterDescription}</p>
                <button className="btn btn-primary btn-block" onClick ={
                    ()=> {
                        addToCart(pet)
                        //go to transaction, details, agreement
                        history.push('/CartPage')
                    }
                }>Adopt//Support </button>
                </article>
            </section>
            )
    }
}
