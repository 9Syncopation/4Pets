import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Home from './Pages/HomePage';
import About from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import PetsPage from './Pages/PetsPage';
import SinglePetPage from './Pages/SinglePetPage';
import UserPets from './Pages/UserPets';
import Default from './Pages/Default';

import {Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
    <h1>
      Hello 4Fur
    </h1>
    <Switch>
      <Route path ="/" exact component ={Home}/>
      <Route path ="/About" component ={About}/>
      <Route path ="/ContactPage" component ={ContactPage}/>
      <Route path ="/PetsPage" component ={PetsPage}/>
      <Route path ="/SinglePetPage/:id" exact component ={SinglePetPage}/>
      <Route path ="/UserPets" component ={UserPets}/>
      <Route path ="/Default" component ={Default}/>
    </Switch>
    
    </>
  );
}

export default App;
