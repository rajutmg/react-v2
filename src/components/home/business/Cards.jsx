import {
  Card,
  CardActionArea,
  CardHeader,
  CardMedia,
  Grid,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  cardImage: {
    height: 200,
  },
}));
function Cards(props) {
  const classes = useStyles();
  return (
    <>
      <Grid item lg={3} xs={12}>
        <Card>
          <CardActionArea to="/questions">
            <CardHeader title={props.sname} subheader={props.title} />
            <CardMedia className={classes.cardImage} image={props.imgsrc} />
          </CardActionArea>
        </Card>
      </Grid>
    </>
  );
}

export default Cards;
