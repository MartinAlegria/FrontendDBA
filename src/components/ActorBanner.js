//Modulos
import React from 'react';

//Estilos
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) =>(
    {

        media: {
            height: 500
        },
        r: {
            position: 'relative',
            padding: theme.spacing(3),
            [theme.breakpoints.up('md')]: {
              padding: theme.spacing(6),
              paddingRight: 0,
            },
          },
      }
));
  
/**
 * Pancarta con imagen del actor
 * Para exportar a layout: <ActorBanner />
 *
 */
export default function ActorBanner(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={props.img}
          style={{display:"flex", justifyContent: "center", alignItems: "flex-start", flexDirection: "column",}}
        >
            <div className={classes.r}>
            </div>
        
        </CardMedia>
    </Card>
  );
}
