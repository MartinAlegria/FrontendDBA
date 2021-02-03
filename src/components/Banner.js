import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme)=>({
    media: {
        height: 140,
      },
      r: {
        position: 'relative',
        padding: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
          padding: theme.spacing(6),
          paddingRight: 0,
        },
      },
}));

export default function Banner({title, image}) {
  const classes = useStyles();
  const text = title ? title: "Reseñas"
  const img = image ? image: 'https://patch.com/img/cdn20/users/23829258/20201204/110228/styles/patch_image/public/movie3___04110058520.jpg'


  return (
    <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={img}
          style={{display:"flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}
        >
            <div className={classes.r}>
            <Typography component="h1" variant="h3" color="inherit" gutterBottom
                style={{textShadow: "3px 3px black"}}
            >
             {text}
            </Typography>
            </div>
        
        </CardMedia>
    </Card>
  );
}
