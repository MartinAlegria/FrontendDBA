import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Card, CardActionArea,
  CardMedia, Typography,
  CardContent, Grid
} from "@material-ui/core"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    height: "150px",
    textDecoration: "none",
  },
  details: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    color: "white",
    alignItems: "center"
  },
  content: {
    textAlign: "center"
  },
  cover: {
    justifyContent: "flex-end",
    width: "75%",
    height: "150px"
  }
}));

export default function Actor(props) {
  const classes = useStyles();
  const theme = useTheme();
  const {name,img} = props.info

  return (
    <Grid item xs={12} md = {6}>
      <Card className={classes.root}>
        <Link to={`/Person/Actor/${name}`} className={classes.root}>
        <CardActionArea style ={{display: "flex"}}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {name}
          </Typography>
        </CardContent>
      </div>
      <CardMedia
        className={classes.cover}
        image={img}
      />
      </CardActionArea>
        </Link>
    </Card>
    </Grid>
  );
}
