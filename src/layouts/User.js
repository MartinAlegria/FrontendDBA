//Componentes
import Base from "./Base";
import Review from "../components/Review";

//Estilos
import Grid from "@material-ui/core/Grid";
import Banner from "../components/Banner";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import React, { useState, useEffect } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";


/**
 * Página que muestra la información del usuario
 * @param {string} user Nombre de usuario que ha iniciado sesión
 * Para exportar a layout: <User />
 *
 */
export default function User(props) {
  const [res, setRes] = useState([]);
  const [buttonText, setBT] = useState("Editar Info");
  const [editar, setEdit] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [userInfo, setUserInfo] = useState({
    fecha: null,
        genero: null,
        mail: null,
        pass: null
  })

  useEffect(() => {
    const fetchData = async () => {
      const response = await (
        await fetch(
          `http://localhost:9000/userReviews/${props.match.params.user}`
        )
      ).json();

      const response2 = await (await fetch(`http://localhost:9000/userInfo/${props.match.params.user}`)).json()


      let temp = [];
      response.forEach((rev) => {
        temp.push({
          title: rev[1].titulo,
          user: `By: ${props.match.params.user}`,
          rating: rev[0].score.low,
          body: rev[0].review,
        });
      });
      setUserInfo({
        fecha: response2[0].fechaDeNacimiento,
        genero: response2[0].genero,
        mail: response2[0].mail,
        pass: response2[0].password
      })
      setRes(temp);
    };

    fetchData();
  }, []);


  const editUser = async () =>{
    const req = {
      method: "POST",
      body: new URLSearchParams({
        username: props.match.params.user,
        mail: userInfo.mail,
        genero: userInfo.genero,
        fecha: userInfo.fecha
      }),
    };
    const response = await (await fetch(`http://localhost:9000/editUser`, req)).text();
    console.log(response)
  }

  const handleClick = () => {
    setEdit(!editar);
    setBT(!editar ? "Guardar" : "Editar Info");

    if(editar) editUser()

  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Base>
      <Grid item container xs={12} spacing={3}>
        <Grid item xs={12}>
          <Banner
            title="Detalles de Usuario"
            image="https://www.propertyturkey.com/files/large/film-making-in-antalya.jpg"
          />
        </Grid>
        <Grid item container xs={12} style={{ alignItems: "center" }}>
          <Grid item xs={6}>
            <Typography component="h3" variant="h3" color="inherit">
              {props.match.params.user}
            </Typography>
          </Grid>

          <Grid xs={6} style={{ paddingTop: "10px" }}>
            <Button variant="contained" color="primary" onClick={handleClick}>
              {buttonText}
            </Button>
          </Grid>
        </Grid>

        <Grid item container xs={12} spacing={2}>
          <Grid item xs={6}>
            {!editar ? (
              <Typography
                component="h6"
                variant="h6"
                color="inherit"
                gutterBottom
              >
                Email: {userInfo.mail}
              </Typography>
            ) : (
              <TextField
                variant="outlined"
                label=""
                value = {userInfo.mail}
                onChange={(e) => setUserInfo({ ...userInfo, mail: e.target.value})}
              />
            )}
          </Grid>

          <Grid item xs={6}>
            {!editar ? (
              <Typography
                component="h6"
                variant="h6"
                color="inherit"
                gutterBottom
              >
                Fecha de Nacimiento: {userInfo.fecha}
              </Typography>
            ) : (
              <TextField
                variant="outlined"
                value={userInfo.fecha}
                onChange={(e) => setUserInfo({ ...userInfo, fecha: e.target.value})}
              />
            )}
          </Grid>

          <Grid item xs={6}>
            {!editar ? (
              <Typography
                component="h6"
                variant="h6"
                color="inherit"
                gutterBottom
              >
                Genero: {userInfo.genero}
              </Typography>
            ) : (
              <>
                <Typography
                  component="h6"
                  variant="h6"
                  color="inherit"
                  gutterBottom
                >
                  Genero
                </Typography>
                <Select
                  open={open}
                  onClose={handleClose}
                  value={userInfo.genero}
                  onOpen={handleOpen}
                  onChange={(e) => setUserInfo({ ...userInfo, genero: e.target.value})}
                  style={{ width: "100%" }}
                >
                  <MenuItem value={"M"}>M</MenuItem>
                  <MenuItem value={"F"}>F</MenuItem>
                </Select>
              </>
            )}
          </Grid>
        </Grid>

        <Grid item xs ={12}>
          <Banner title="Reseñas Tuyas"/>
        </Grid>


        <Grid item container xs={12}>
          {res.length > 0 && res.map((rev) => <Review info={rev} />)}
        </Grid>
      </Grid>
    </Base>
  );
}
