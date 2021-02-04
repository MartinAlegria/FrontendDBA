//Modulos
import * as React from "react";
import PropTypes from "prop-types";
import logo from "../images/PelisChidas.png"

//Estilos
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { Grid } from "@material-ui/core";

/**
 * Información copyright en footer
 * Para exportar a layout: <Copyright />
 *
 */
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        ITColegas
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

//Estilos
const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(3, 0),
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
        <Grid item xs={12} style={{
            textAlign: "center"
          }}>
        <img
          src={logo}
          style={{
            flex: 1,
            textDecoration: "none",
            color: "white",
            height: 30,
          }}
        />
        </Grid>

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
