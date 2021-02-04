//Componentes
import * as React from 'react';
import PropTypes from 'prop-types';

//Estilos
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: 250
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

/**
 * Tarjeta con información de una película
 * @param {Object} post Objeto con la información título e imagen de la película
 * Para exportar a layout: <MovieInfoCard />
 * @param {String} score El Score de la pelicula actual, si es null, significa que
 * no hay suficientes reviews para que tenga un score.
 */
function MovieInfoCard(props) {
  const classes = useStyles();
  const { post, score } = props;
  const fit = score ? 8 : 12

  return (
    <Grid item xs={fit}>
  
      <Paper
          className={classes.mainFeaturedPost}
          style={{ backgroundImage: `url(${post.image})` }}
        >
          {/* Increase the priority of the hero background image */}
          {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />}
          <div className={classes.overlay} />
          <Grid container>
            <Grid item md={6}>
              <div className={classes.mainFeaturedPostContent}>
                <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                  {post.title}
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Paper>

    </Grid>
  );
}

MovieInfoCard.propTypes = {
  post: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieInfoCard;
