//Módulos
import React from "react";
import { useHistory } from "react-router-dom";

//Estilos
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

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
        Pelis Chidas
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

/**
 * Página de inicio de sesión
 *
 */
export default function SignIn(props) {
  let history = useHistory();
  const classes = useStyles();
  const [userPass, setUserPass] = React.useState({
    user: "",
    pass: "",
  });

  const processData = () => {
    const fetchData = async () => {
      const req = {
        method: "POST",
        header: {
          "Content-Type": "aplication/x-www-form-urlencoded; charset=UTF-8",
        },
        body: new URLSearchParams({
          username: userPass.user,
          password: userPass.pass,
        }),
      };

      const res = await (
        await fetch(`http://localhost:9000/login`, req)
      ).text();
      console.log(res);

      if (res === "OK") {
        sessionStorage.setItem("user", userPass.user);
        history.push("/");
      } else {
        alert("Usuario o Password incorrectos");
      }
    };

    fetchData();
  };
  const handleUser = (e) => {
    setUserPass({ ...userPass, user: e.target.value });
  };
  const handlePass = (e) => {
    setUserPass({ ...userPass, pass: e.target.value });
  };

  return (
    <Container component="main" maxWidth="xs">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Username"
            autoFocus
            onChange={handleUser}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            autoComplete="current-password"
            onChange={handlePass}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={processData}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/SignUp" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </ThemeProvider>
    </Container>
  );
}
