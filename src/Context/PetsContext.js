import React from 'react';
import axios from 'axios';
import {url} from '../Utils/ApiCats'
import {UsersPets} from '../Utils/UsersPetsHelper'
import {flattenPets} from '../Utils/ApiCats'



export const PetsContext = React.createContext();

//Provider, Consumer, useContext()

//useEffect();
//lets perform side effects - data fetching , window event listener
//by default runs after every render
// cb as first parameter 
//return cleanup function to avoid memory leaks so cannot be async
//second argument - arry of values (dependencies)
//
export default function PetsProvider({children}) {
    const [ loading , setLoading] = React.useState(false);
    const [ pets , setPets] = React.useState([]);
    const [ usersPets, setUsersPets] = React.useState([]);

React.useEffect(() => {
    setLoading(true);
//TODO change this to PetsPage 
    axios.get(`${url}/pets`)
    .then(response => {
        console.log('pets response', response);
        const usersOwnedPets = UsersPets(flattenPets(response.data));
        const pets = flattenPets(response.data)
        console.log('flattenPets', response.data);
        console.log('Pets flattenPets', pets);
        
        setPets(pets)
        setUsersPets(usersOwnedPets)
        setLoading(false);
    },)
    // Cleanup Function
    return ()=> {};
    // aray of depandencies for running the cb
    },[])

        return (
        <PetsContext.Provider value ={{ loading, pets, usersPets}}>
        {children}
        </PetsContext.Provider>
    )
}
