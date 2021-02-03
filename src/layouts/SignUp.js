import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
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

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
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
    marginTop: theme.spacing(3),
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

export default function SignUp() {
  const classes = useStyles();

  let history = useHistory();

  const [gender, setGender] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [user, setUser] = React.useState()
  const [correo, setCorreo] = React.useState()
  const [fecha, setFecha] = React.useState()
  const [pass, setPass] = React.useState()


  const registerUser = async() =>{
    const response = await (await fetch(`http://localhost:9000/registerUser/${user}/${pass}/${correo}/${gender}/${fecha}`)).json()
    console.log(response)
    history.push('/')

  }

  const handleSumbit = () =>{
    registerUser()
  }

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
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
            Sign up
          </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="user"
                  name="username"
                  variant="outlined"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  autoFocus
                  onChange={v=>{setUser(v.target.value)}}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Correo electronico"
                  name="email"
                  autoComplete="email"
                  onChange={v=>{setCorreo(v.target.value)}}

                />
              </Grid>
              <Grid item container xs={12}>
                <Grid item xs={6}>
                  <Typography component="h3" variant="h5">
                    Genero:
                  </Typography>
                </Grid>

                <Grid item xs={6}>
                  <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={gender}
                    onChange={handleChange}
                    style={{ width: "100%" }}
                  >
                    <MenuItem value={"M"}>M</MenuItem>
                    <MenuItem value={"F"}>F</MenuItem>
                  </Select>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="fecha"
                  label="Fecha de Nacimiento: dd-mm-aaaa"
                  name="fecha"
                  autoComplete="fecha"
                  onChange={v=>{setFecha(v.target.value)}}

                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={v=>{setPass(v.target.value)}}

                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSumbit}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </ThemeProvider>
    </Container>
  );
}
