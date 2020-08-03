import React from "react";
import { PetsContext } from "../Context/PetsContext";
import Loading from "../Components/Loading/Loading";
import AchievementBoard from "../Assets/Img/Views/pngfind.com-pokemon-go-icon-png-4968932.png"
import "./UserPets.css";

export default function UserPets() {
  const { pets } = React.useContext(PetsContext);
  const pet = pets.find((item) => item.UsersPets === true);
  if (pets.length === 0) {
    return <Loading />;
  } else {
    const { image, name, gender, description, shelterDescription } = pet;
    console.log("UserPets -> image", image);
    console.log("pets", pets);

    console.log("UserPets -> name", name);
    return (
      <section className="user-page">
		<h1> Follow your pets</h1>
		<article className="user-pets-profile">
		
		
        <article className="pet-profile-name">
          <p> Chuckwalla</p>
        </article>
		
		<div>
        <img src={image} alt={name} className="single-pet-image" />
		</div>
		</article>
		<div>
		<h1>Achievements</h1>
		</div>
		<div className="img-achievement">
		<img src={AchievementBoard} />
		</div>
      </section>
    );
  }
}
