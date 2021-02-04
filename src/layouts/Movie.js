//Módulos
import * as React from 'react';
import {useEffect, useState} from 'react';

//Estilos
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {
  Grid,
  Divider,
  Container,
  List,
} from "@material-ui/core"

//Componentes
import MovieInfoCard from '../components/MovieInfoCard';
import RatingCard from '../components/RatingCard';
import MovieDetails from '../components/MovieDetails'
import Actor from '../components/Actor'
import Review from '../components/Review';
import Banner from '../components/Banner';
import Base from './Base'

const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });

const useStyles = makeStyles((theme) => ({
mainGrid: {
    marginTop: theme.spacing(3),
},
paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


const reviews=[
  {
    title: "Titulo1",
    user: "us1",
    rating: "5",
    body: "body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.",
  },{
    title: "Titulo2",
    user: "us2",
    rating: "4.5",
    body: "body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.",
  },{
    title: "Titulo3",
    user: "us3",
    rating: "4.7",
    body: "body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.",
  }
]

 /**
 * Página donde se consulta la información de una película.
 * 
 * @param {string} id nombre de la película.
 *
 */
  export default function Movie(props){
    const classes = useStyles();
    let [movieDetails, setMovieDetails] = useState({
        image:"",
        description: "",
        rating: "",
        title: "",
        director: "",
        directorObj: {},
        year: "",
        actorInfo:[]
    });


    useEffect(()=>{
      
      const fetchData = async () =>{
        //Obtener datos de la película, sus actores y su director.
        const movieResp = await (await fetch(`http://localhost:9000/movieFilter/${props.match.params.id}`)).json();
        const dirObj = await (await fetch(`http://localhost:9000/movieDirector/${props.match.params.id}`)).json();
        const actorResp = await (await fetch(`http://localhost:9000/movieActors/${props.match.params.id}`)).json();
        let temp = []
        console.log(movieResp, actorResp)
        actorResp.forEach(actor=> temp.push({name: actor[0], img:actor[1]}))
        setMovieDetails({
          description: movieResp[0].descripcion,
          title: movieResp[0].titulo,
          year: movieResp[0].anio.low,
          image: movieResp[0].banner,
          directorObj: dirObj[0],
          director: dirObj[0].nombre,
          actorInfo: temp
        })
      }

      fetchData()

    },[])

    return(
     <Base>
        <main>
      <Container maxWidth="lg">
      <Grid container spacing={3} className={classes.mainGrid}>
              <MovieInfoCard post={movieDetails}/>
              <RatingCard rating={"90"}/>

            <MovieDetails movie = {movieDetails}/>

            <Grid item container xs={12} spacing ={3}> 
              {movieDetails.actorInfo.map(actor=> 
                <Actor info={actor}/>
                )}

            </Grid>

            <Grid item xs={12}>
            <Banner/>
            </Grid>

            <Grid item container xs={12} spacing={3}>

            <List component="nav" className={classes.root} aria-label="mailbox folders">

            {reviews.map(r=>
              <>
              <Review info ={r}/>
              <br></br>
              <Divider />
              <br></br>
              </>
            )}
                  
            </List>

            </Grid>

            




        </Grid>
      </Container>
        </main>
    
     </Base>
    )

  }