//Módulos
import React from "react";
import { useHistory } from "react-router-dom";

//Estilos
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Rating from "@material-ui/lab/Rating";

//Componentes
import Base from "./Base";
import Banner from "../components/Banner";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "100%",
    },
  },
}));

/**
 * Página donde el usuario puede hacer una reseña.
 *
 * @param {string} user usuario actual.
 * @param {string} movie película a calificar.
 *
 */
export default function MakeReview(props) {
  let history = useHistory();

  const classes = useStyles();
  const [res, setRes] = React.useState("Controlled");
  const [rating, setRating] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  const postReview = async () => {
    //Crear reseña en backend
    const req = {
      method: "POST",
      header: {
        "Content-Type": "aplication/x-www-form-urlencoded; charset=UTF-8",
      },
      body: new URLSearchParams({
        username: props.match.params.user,
        review: res,
        score: rating,
        movie: props.match.params.movie,
      }),
    };
    const responsefetch = await (
      await fetch(`http://localhost:9000/createReview`, req)
    ).text();
    console.log(responsefetch);
    history.push("/");
  };

  const handleChange = (event) => {
    setRes(event.target.value);
  };

  return (
    <Base>
      <Grid container xs={12} className={classes.root} spacing={3}>
        <Grid item xs={12}>
          <Banner title={"Reseña"} />
        </Grid>
        <Grid item container xs={12} style={{ placeContent: "center" }}>
          <Typography variant="h4" component="h2">
            Reseña - {props.match.params.movie}
          </Typography>
        </Grid>
        <Grid item container xs={12}>
          <Grid item container xs={12} style={{ textAlign: "center" }}>
            <Grid item xs={4}>
              <Typography variant="h5" component="h2">
                Por: {props.match.params.user}
              </Typography>
            </Grid>

            <Grid item xs={4}>
              <Rating
                name="hover-feedback"
                value={rating}
                precision={1}
                max={10}
                onChange={(event, newValue) => {
                  setRating(newValue);
                }}
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}
              />
            </Grid>

            <Grid item xs={4}>
              <Typography variant="h5" component="h2">
                Rating: {rating}
              </Typography>
            </Grid>
          </Grid>

          <TextField
            id="filled-multiline-static"
            label="Reseña"
            multiline
            rows={5}
            placeholder="Escribe aqui tu reseña"
            variant="filled"
            onChange={handleChange}
          />
          <Button variant="contained" color="primary" onClick={postReview}>
            {" "}
            Postear{" "}
          </Button>
        </Grid>
      </Grid>
    </Base>
  );
}
