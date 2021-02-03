import {useEffect, useState} from "react";
import {
    Container,
    Grid
} from '@material-ui/core';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import ActorBanner from "../components/ActorBanner"
import ActorInfo from "../components/ActorInfo"
import MiniCard from "../components/MiniCard"
import Base from "./Base"

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

export default function Person(props){
    const classes = useStyles();
    let [actorData, setActorData] = useState({
        pelis: [],
        info: {
            name: props.match.params.id,
            age: "",
            birthday: "",
            desc: "",
            image: ""
        }
    })
    console.log(props.match)

    useEffect(()=>{
        const fetchData = async () =>{
            let personMovies=[]
            if(props.match.params.type!=="Director"){
                 personMovies = await (await fetch(`http://localhost:9000/actorsMovies/${props.match.params.id}`)).json();
            }else{
                 personMovies = await (await fetch(`http://localhost:9000/directorsMovies/${props.match.params.id}`)).json();
            }

            const actorInfo = await (await fetch(`http://localhost:9000/actorInfo/${props.match.params.id}`)).json();
            let temp = []
            console.log(actorInfo)
            personMovies.forEach(per=> temp.push({title: per.titulo, description: per.descripcion ,image: per.poster}))
            setActorData({
                info: {
                    ...actorData.info,
                    age: actorInfo[0].edad.low,
                    birthday: actorInfo[0].nacimiento,
                    image: actorInfo[0].foto,
                    desc: actorInfo[0].bio,
                },
                pelis: temp
            })
          }
    
          fetchData()

    },[])

    return(
        <Base>
            <main>
            <Container maxWidth="lg">
        <Grid container spacing={3} className={classes.mainGrid}>

            <Grid item xs={12} md={4}>
            <ActorBanner img={actorData.info.image} />
            </Grid>

            <Grid item xs={12} md={8} style={{display:"flex", alignItems: "center"}}>
                <ActorInfo info={actorData.info}/>
            </Grid>


            <Grid item container xs={12} spacing = {3}>
                {actorData.pelis.map(peli=>
                    <MiniCard post={peli}/>
                    )}
            </Grid>

        </Grid>
            </Container>
            </main>
        </Base>
    )
}