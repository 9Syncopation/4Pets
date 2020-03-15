import React from 'react';
import PetsList from '../PetsList/PetsList'
import {PetsContext} from '../../Context/PetsContext'
import LoadingGif from '../Loading/Loading'


export default function UsersPets() {
    const {loading, usersPets} = React.useContext(PetsContext)
    if(loading){
        return <loading/>
    }
    return <PetsList title = "Users Pets" pets={usersPets}/>
}
