//Componentes
import React from "react";
import Grid from "@material-ui/core/Grid";

//Estilos
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "grey",
    padding: "10 10",
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6, 6),
  },
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
  const [edit, setEdit] = React.useState(false);
  const [rese, setRes] = React.useState("");
  const { userr } = props;
  const { title, user, rating, body } = props.info;

  const handleChange = (event) => {
    setRes(event.target.value);
  };

  const modReview = async () => {
    const req = {
      method: "POST",
      header: {
        "Content-Type": "aplication/x-www-form-urlencoded; charset=UTF-8",
      },
      body: new URLSearchParams({
        username: userr,
        movie: title,
        review: rese,
        score: rating,
      }),
    };

    const res = await (
      await fetch("http://localhost:9000/modifyReview", req)
    ).text();
    console.log(res);
    setEdit(!edit);
    window.location.reload();
  };

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Grid item container xs={12}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            {title}
          </Typography>
        </Grid>

        {userr && (
          <Grid item xs={12} md={6}>
            {edit ? (
              <Button
                variant="contained"
                color="primary"
                style={{ margin: "0 10px" }}
                onClick={modReview}
              >
                Guardar Reseña
              </Button>
            ) : (
              <Button
                variant="contained"
                color="primary"
                style={{ margin: "0 10px" }}
                onClick={() => setEdit(!edit)}
              >
                Editar Reseña
              </Button>
            )}
          </Grid>
        )}
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

      {edit ? (
        <Grid item xs={12}>
          <TextField
            style={{ width: "-webkit-fill-available" }}
            multiline
            rows={5}
            placeholder={body}
            variant="filled"
            onChange={handleChange}
          />
        </Grid>
      ) : (
        <Grid item xs={12}>
          <Typography variant="body1" gutterBottom>
            {body}
          </Typography>
        </Grid>
      )}
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
