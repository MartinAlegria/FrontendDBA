//Componentes
import React from "react";
import Grid from "@material-ui/core/Grid";

//Estilos
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "grey",
    padding: "10 10",
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6, 6),
  }
}));

/**
 * Mostrar reseña de una pelicula
 * @param {string} title Título de la película
 * @param {integer} user Usuario que realizó la reseña
 * @param {integer} rating Calificación asignada por el usuario
 * @param {string} body Comentario a la película realizado por el usuario
 * Para exportar a layout: <Review />
 *
 */
export default function Review(props) {
  const classes = useStyles();
  const {title, user, rating, body} = props.info

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Grid item xs={12}>
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
      </Grid>

      <Grid item container xs={12}>
        <Grid item xs={6}>
          <Typography variant="subtitle1" gutterBottom>
            {user}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1" gutterBottom>
            Score: {rating}
          </Typography>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="body1" gutterBottom>
          {body}
        </Typography>
      </Grid>

      </Container>

  );
}

/*


<Typography variant="subtitle1" gutterBottom>
 Usuario + Estrellas
</Typography>
<Typography variant="body1" gutterBottom>
  body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
  unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
  dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
</Typography>
<Typography variant="caption" display="block" gutterBottom>
  Leer Mas
</Typography>
</div>

*/
