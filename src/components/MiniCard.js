//Componentes
import * as React from 'react';
import PropTypes from 'prop-types';

//Estilos
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const useStyles = makeStyles({
  root:{
    textDecoration: "none"
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
});

/**
 * Tarjeta pequeña
 * @param {Object} post Objeto con la información título, imagen y descripción.
 * Para exportar a layout: <MiniCard />
 *
 */
export default function MiniCard(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Grid item xs={12} md={12}>
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {post.title}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {post.description}
              </Typography>
              <Button href={`/Movie/${post.title}`}>
              Continue reading...
            </Button>
            </CardContent>
          </div>
            <CardMedia
              className={classes.cardMedia}
              image={post.image}

            />
        </Card>
    </Grid>
  );
}

MiniCard.propTypes = {
  post: PropTypes.shape({
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

