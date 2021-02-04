//Componentes
import React from "react";

//Estilos
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid"
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});


/**
 * Mostrar información de una película
 * @param {string} title Título de la película
 * @param {integer} year Año de lanzamiento de la película
 * @param {string} description Descripcion de la película
 * @param {string} director Director de la película
 * Para exportar a layout: <MovieDetails />
 *
 */
export default function MovieDetails(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const {title, year, description, director} = props.movie
  return (

    <Grid item xs={12}> 


     <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="h6" component="h3" color="textSecondary">
          {year}
        </Typography>
        <Link to={`/Person/Director/${director}`}>
        <Typography variant="h6" component="h3" color="textSecondary" style ={{fontWeight: "bold", }}>
          {director}
        </Typography>
        </Link>
        <Typography className={classes.pos}>{description}</Typography>
      </CardContent>
    </Card>


    </Grid>

   
  );
}
