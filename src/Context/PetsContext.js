import React from 'react';
import axios from 'axios';
import url from '../Utils/ApiCats'
import {UsersPets} from '../Utils/UsersPetsHelper'



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
    axios.get(`${url}/products`)
    .then(response => {
        const usersOwnedPets = UsersPets(response.data);
        setPets(response.data)
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
