import React from "react";
import { Link } from "react-router-dom";
import "../PetsCard/PetsCard.css";
// import { makeStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import defaultImage from "../../Assets/Img/Hero/1.jpg";

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 140,
//   },
// });
export default function PetsCard({ image, name, gender, id, description }) {
  // const classes = useStyles();
  //TODO set up the card property - like, viewed etc.
  const url = image || defaultImage;
  console.log("image extraction", image);
  return (
    <div className="cards-neo">
      <Link to={`SinglePetPage/${id}`}>
        <CardMedia
          className="img-card"
          image={url}
          title={name || "Cat Name"}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name || "Cat Name"}
          </Typography>
          <p> {gender || "gender"} </p>
          <Typography variant="body2" color="textSecondary" component="p">
            {description || "Description"}
          </Typography>
        </CardContent>
      </Link>
      <CardActions className="space-between">
        <Button size="small" color="primary" className="btn-neo">
          Share
        </Button>
        <Button size="small" color="primary" className="btn-neo">
          <Link to={`SinglePetPage/${id}`}> Details</Link>
        </Button>
      </CardActions>
    </div>
  );
}
PetsCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
