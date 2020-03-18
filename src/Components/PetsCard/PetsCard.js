import React from "react";
import { Link } from "react-router-dom";
import '../PetsCard/PetsCard.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


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

  //TODO set up the card properly
  // const url = image.url;
  console.log('image extraction',image);
  
  return (

    <Card className={classes.root}>
    <CardActionArea>
      <CardMedia
        className={classes.media}
        image={`http://placekitten.com/200/${id}00`}
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
        {gender}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        {description}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions className="space-between">
      <Button size="small" color="primary">
        Share
      </Button>
      <Button size="small" color="primary">
      <Link
          to={`SinglePetPage/${id}`}
          > Details</Link>
      </Button>
    </CardActions>
  </Card>
 );
}
