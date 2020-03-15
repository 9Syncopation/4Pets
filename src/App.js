import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Switch } from "react-router-dom";
//Pages
import Home from "./Pages/HomePage";
import About from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import PetsPage from "./Pages/PetsPage";
import SinglePetPage from "./Pages/SinglePetPage";
import UserPets from "./Pages/UserPets";
import Default from "./Pages/Default";
import Error from "./Pages/Error";

//Components
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import SideUserPets from "./Components/SideUserPets";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Sidebar />
      <Footer />
      <SideUserPets />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/About" component={About} />
        <Route path="/ContactPage" component={ContactPage} />
        <Route path="/PetsPage" component={PetsPage} />
        <Route
          path="/SinglePetPage/:id"
          children={<SinglePetPage></SinglePetPage>}
        />
        <Route path="/UserPets" component={UserPets} />
        <Route path="/Default" component={Default} />
        <Route path="*" component={Error} />
      </Switch>
    </>
  );
}

export default App;
