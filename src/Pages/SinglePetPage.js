import React from 'react';
import {useParams} from 'react-router-dom';

export default function SinglePetPage() {
    const {id} = useParams();
    
    return (
        <div>
            <h1> single pets SinglePetPage id is ={id}</h1>
            <h1> single pets SinglePetPage</h1>
        </div>
    )
}
