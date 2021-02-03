import Base from "./Base";
import MiniCard from "../components/MiniCard";
import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export default function SearchResults(props) {
  const [results, setRes] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await (
        await fetch(
          `http://localhost:9000/movieFilter/${props.match.params.movie}`
        )
      ).json();
      console.log(response);
      let temp = []
      response.forEach((r)=>{
        temp.push({
          title: r.titulo,
          description: r.descripcion,
          image: r.poster
        })
      })
      console.log(temp)
      setRes(temp);
    };

    fetchMovies();
  },[]);

  return (
    <Base>
      <Grid container xs={12} spacing={3}>
        {results.length > 0 ? (
          results.map((peli) => <MiniCard post={peli} />)
        ) : (
          <Grid item xs={12}>
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              No hay resultados de tu busqueda
            </Typography>
          </Grid>
        )}
      </Grid>
    </Base>
  );
}
