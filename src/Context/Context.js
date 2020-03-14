import React , { Component } from 'react'

const PetsContext = React.createContext();

//Provider
// Consumer

class PetsProvider extends Component {

    render () {
        return (
        <PetsContext.Provider value = "">
        
        </PetsContext.Provider>
        )
    }
}