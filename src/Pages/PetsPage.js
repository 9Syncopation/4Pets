import React , {useContext} from 'react';
import {PetsContext} from '../Context/PetsContext';
import Loading from '../Components/Loading/Loading';
import PetsList from '../Components/PetsList/PetsList'

export default function PetsPage() {
   const {loading, pets} = React.useContext(PetsContext)
   console.log('Pets Products', pets );
   if (loading) {
       return <Loading></Loading>
   }
   return <PetsList title = 'Our Lovely Cats' pets ={pets}/>
   
}
