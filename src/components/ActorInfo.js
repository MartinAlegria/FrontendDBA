//Modulos
import React from "react";

//Estilo
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  }
});
  
/**
 * Contenedor con la información del actor
 * @param {string} name Nombre del actor
 * @param {string} age Edad del actor
 * @param {string} birthday Cumpleaños del actor
 * @param {string} desc Biografia del actor
 * Para exportar a layout: <ActorInfo />
 *
 */
export default function ActorInfo(props) {
  const classes = useStyles();
  const {name, age, birthday, desc} = props.info

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Grid item xs={12}>
        <Typography variant="h2" gutterBottom>
         {name}
        </Typography>
      </Grid>

      <Grid item container xs={12}>
        <Grid item xs={6}>
          <Typography variant="h4" gutterBottom>
          {birthday} 
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h4" gutterBottom>
           Age {age}
          </Typography>
        </Grid>
      </Grid>

      <Grid item xs={12}>
      <Typography variant="body1" gutterBottom>
      {desc}
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
