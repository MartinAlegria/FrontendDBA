//Componentes
import * as React from "react";
import PropTypes from "prop-types";

//Estilos
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.black,
  },
  sidebarSection: {
    marginTop: theme.spacing(1),
    textAlign: "center",
  },
  social: {
    marginTop: theme.spacing(1),
  },
}));

/**
 * Mostrar top películas
 * @param {string} description Descripcion de la página
 * @param {Object} social Contiene nombres e iconos de redes sociales
 * @param {string} title Título de la página
 * Para exportar a layout: <MovieDetails />
 *
 */
function Sidebar(props) {
  const classes = useStyles();
  const { description, social, title } = props;
  const [good, setGood] = React.useState();
  const [bad, setBad] = React.useState();

  React.useEffect(() => {
    const fetchData = async () => {
      const res = await (await fetch("http://localhost:9000/topMovies")).json();
      const res2 = await (
        await fetch("http://localhost:9000/bottomMovies")
      ).json();
      setGood(res);
      setBad(res2)
    };

    fetchData();
  });

  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={0} className={classes.sidebarAboutBox}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </Paper>
      <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
        Top 5 - Peliculas
      </Typography>
      {good &&
        good.map((movie) => (
          <Link
            display="block"
            variant="body1"
            className={classes.sidebarSection}
            href={`/Movie/${movie.titulo}`}
            key={movie.titulo}
          >
            {movie.titulo} - {movie.score}
          </Link>
        ))}

      <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
        Bottom 5 - Peliculas
      </Typography>
      {bad &&
        bad.map((movie) => (
          <Link
            display="block"
            variant="body1"
            className={classes.sidebarSection}
            href={`/Movie/${movie.titulo}`}
            key={movie.titulo}
          >
            {movie.titulo} - {movie.score}
          </Link>
        ))}

      <Typography variant="h6" gutterBottom className={classes.social}>
        Social
      </Typography>
      {social.map((network) => (
        <Link display="block" variant="body1" href="#" key={network.name}>
          <Grid container direction="row" spacing={1} alignItems="center">
            <Grid item>
              <network.icon />
            </Grid>
            <Grid item>{network.name}</Grid>
          </Grid>
        </Link>
      ))}
    </Grid>
  );
}

Sidebar.propTypes = {
  archives: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  description: PropTypes.string.isRequired,
  social: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Sidebar;
