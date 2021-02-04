//Componentes
import * as React from "react";
import PropTypes from "prop-types";

//Estilos
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { sizing } from "@material-ui/system";

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    color: theme.palette.common.white,
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)",
  },
  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

/**
 * Tarjeta con la calificación de una película
 * @param {integer} rating Calificación de una película
 * Para exportar a layout: <RatingCard />
 *
 */
export default function RatingCard(props) {
  const classes = useStyles();
  const { score } = props;

  return (
    <Grid item xs={4} style={{ alignSelf: "center" }}>
      <Grid container>
        <Grid item xs={12}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              component="h1"
              variant="h2"
              color="inherit"
              gutterBottom
              style={{ textAlign: "center" }}
            >
              Score: {score}/10
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}
