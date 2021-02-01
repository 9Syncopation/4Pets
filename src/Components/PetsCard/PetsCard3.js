import React from "react";
import { Link } from "react-router-dom";
import "../PetsCard/PetsCard.css";
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

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function PetsCard({ image, name, gender, id, description }) {
  const classes = useStyles();

  //TODO set up the card property - like, viewed etc.
  const url = image;
  console.log("image extraction", image);

  return (
	  
	  <div className="cards-neo">
      <CardMedia className="img-card" image={url} title={name} />
      <div className="image-details">
	  
	  <Typography gutterBottom variant="h5" component="h2">
	  </Typography>
	  <h6>
	  {name}
	  </h6>
	  <p> {gender} </p>
	  </div>
	  
	  <CardActions className="card-actions space-between">
	  { /*<Button size="small" color="primary" className="btn-neo">
	  Share
	</Button>*/}
	<FormControlLabel
	control={
		<Checkbox
		  icon={<FavoriteBorder />}
		  checkedIcon={<Favorite />}
		  name="checkedH"
		  />
	  }
	  />
        <Button size="small" color="primary" className="btn-neo">
		<Link to={`SinglePetPage/${id}`}> Details</Link>
        </Button>
		</CardActions>
		</div>
		
		);
}
