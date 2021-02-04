//Modulos
import * as React from 'react';
import PropTypes from 'prop-types';

//Estilos
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';


/**
 * Información copyright en footer
 * Para exportar a layout: <Copyright />
 *
 */
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        PelisChidas
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

//Estilos
const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    // marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
}));

/**
 * Footer con descripcion
 * @param {string} description Descripcion del footer 
 * @param {string} title Titulo del footer
 * Para exportar a layout: <Footer />
 *
 */
function Footer(props) {
  const classes = useStyles();
  const { description, title } = props;

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          {description}
        </Typography>
        <Copyright />
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Footer;
