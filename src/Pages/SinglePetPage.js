import React from "react";
import { useParams } from "react-router-dom";
import { PetsContext } from "../Context/PetsContext";
import { CartContext } from "../Context/CartContext";
import { useHistory } from "react-router-dom";
import ShelterIcon from "../Assets/Img/Views/shelter.JPG"
import AwardAction from "../Assets/Img/Views/pngfind.com-badge-icon-png-6371328.png"
import Loading from "../Components/Loading/Loading";
import "./SinglePetPage.css";

export default function SinglePetPage() {
  const { id } = useParams();
  const history = useHistory();

  const { pets } = React.useContext(PetsContext);
  const { addToCart } = React.useContext(CartContext);
  const pet = pets.find((item) => item.id === parseInt(id));
  if (pets.length === 0) {
    return <Loading />;
  } else {
    const { image, name, gender, description, shelterDescription } = pet;
    console.log("strapi pets", pet);

    return (
      <section className="single-product">
        {/* <img src={image} alt={name} className="single-product-image"/>*/}
        <img src={image} alt={name} className="single-product-image1" />
        <div className="user-profile__name">
          <p>Hi ,I am {name}</p>
		  </div>
		  <article className="user-profile_description">
		  <h6> Life is for the living!<br/> Gotta keep playing! Not into routines! <br/>Do something new every day ! <br/>So if you’re looking for cat with plenty of vigour and a bit of nuttiness – I am for you!</h6>
		  <div className="shelter-description display-flex row align-center">
		  <img src={ShelterIcon} alt="shelter icon "/>
          <h6>
		  <strong>Our Shelter:</strong>
		  </h6>
		  <div className="shelter-icon">
          <p>Wounded Paw Project provides service to these individuals and veterans to help them recover from the trauma and transition back into a normal life.</p>
		  </div>
		  </div>
		  <div className="badge-action">
		  
		  Adopt me and start your experience!!
		  <img src={AwardAction} alt="award "/>
		  
		  </div>
          <button
		  className="btn btn-block adopt"
		  onClick={() => {
			  addToCart(pet);
              //go to transaction, details, agreement
              history.push("/CartPage");
            }}
			>
            Adopt
			</button>
			</article>
      </section>
    );
  }
}
