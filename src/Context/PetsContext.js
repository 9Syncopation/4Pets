import React from 'react';
import axios from 'axios';
import url from '../Utils/ApiCats'


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
    const [ userPets, setUserPets] = React.useState([]);

React.useEffect(() => {
    setLoading(true);
//TODO change this to PetsPage 
    axios.get(`${url}/products`)
    .then(response => {
        setPets(response.data)
        setLoading(false);
    },)
    // Cleanup Function
    return ()=> {};
    // aray of depandencies for running the cb
    },[])

        return (
        <PetsContext.Provider value ={{ loading, pets, userPets}}>
        {children}
        </PetsContext.Provider>
    )
}
