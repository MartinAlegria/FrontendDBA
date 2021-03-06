//Componentes
import MovieCard from "../components/MovieCard";
import MiniCard from "../components/MiniCard";
import Sidebar from "../components/Sidebar";
import Base from "./Base";

//Estilos
import { makeStyles } from "@material-ui/core/styles";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import Grid from "@material-ui/core/Grid";

//Módulos
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const mainFeaturedPost = {
  title: "Star Wars: The Empire Strikes Back",
  description:
    "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued by Darth Vader and a bounty hunter named Boba Fett all over the galaxy..",
  image:
    "https://starwarsblog.starwars.com/wp-content/uploads/2020/06/the-empire-strikes-back-post-m-ferguson_TALL.jpg",
  imageText: "main image description",
  linkText: "Continue reading…",
};

const featuredPosts = [
  {
    title: "Matrix",
    description:
      "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
    imageText: "Image Text",
  },
  {
    title: "Mamma Mia!",
    description:
      "The story of a bride-to-be trying to find her real father told using hit songs by the popular 1970s group ABBA.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTA2MDU0MjM0MzReQTJeQWpwZ15BbWU3MDYwNzgwNzE@._V1_UX182_CR0,0,182,268_AL_.jpg",
    imageText: "Image Text",
  },
  {
    title: "The Amazing Spider-Man",
    description:
      "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_UX182_CR0,0,182,268_AL_.jpg",
    imageText: "Image Text",
  },
];

const sidebar = {
  title: "Integrantes",
  description: "Martin Alegria, Sabrina Santana y Ruben Sanchez ",
  social: [
    { name: "Twitter", icon: TwitterIcon },
    { name: "Facebook", icon: FacebookIcon },
  ],
};

/**
 * Página principal.
 *
 */
export default function Home(props) {
  const classes = useStyles();

  return (
    <Base>
      <Router>
        <main>
          <MovieCard post={mainFeaturedPost} />

          <Grid container spacing={5} className={classes.mainGrid}>
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              social={sidebar.social}
            />
            <Grid item container xs={12} md={8} spacing={3}>
              {featuredPosts.map((post) => (
                <MiniCard key={post.title} post={post} />
              ))}
            </Grid>
          </Grid>
        </main>
      </Router>
    </Base>
  );
}
