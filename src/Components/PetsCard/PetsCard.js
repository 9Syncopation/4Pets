import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import FavoriteBorderTwoToneIcon from "@material-ui/icons/FavoriteBorderTwoTone";

import Masonry from "react-masonry-css";
import "../PetsCard/PetsCard.css";

const useStyles = makeStyles(({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  heartIcon :{
	fill: "black",
	}
}));

export default function PetsCard({
  image,
  name,
  gender,
  id,
  UsersPets,
  description,
}) {
  console.log("PetsCard -> usersPets", UsersPets);
  const classes = useStyles();

  //TODO set up the card property - like, viewed etc.
  const url = image;
  console.log("image extraction", image);

  return (
    <div className="cards-neo">
      <a class="card" href="#">
        <div
          class="card__background"
          style={{ backgroundImage: `url(${url})` }}
        ></div>
        <div class="card__content">
          <div>
            <p class="card__category">{name}</p>
            <h3 class="card__heading">{gender}</h3>
          </div>
          <CardActions className="card-actions space-between">
            <FormControlLabel className={classes.heartIcon}
              control={
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                  name="checkedH"
                />
              }
            />

            {/*<Button size="small" color="primary" className="btn-neo">
		Share
	  </Button>*/}
            {UsersPets ? (
              <Button size="small" color="primary" className="btn-neo adopted">
                <Link to={`SinglePetPage/${id}`}> Adopted</Link>
              </Button>
            ) : (
              <Button size="small" color="primary" className="btn-neo">
                <Link to={`SinglePetPage/${id}`}> Adopt</Link>
              </Button>
            )}
          </CardActions>
        </div>
      </a>
    </div>
  );
}
