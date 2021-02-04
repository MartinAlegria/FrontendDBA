//Componentes
import * as React from 'react';
import PropTypes from 'prop-types';

//Estilos
import { fade, makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Link from '@material-ui/core/Link';
import { Avatar } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
    marginLeft:30,
    textDecoration: "none",
    color: "white"
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: "10px",
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  user: {
    display: "flex",
    justifyContent: "space-between"
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '0ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },

}));

/**
 * Header
 * @param {Array} sections Arreglo con titulo y url de cada sección
 * @param {string} title Titulo del header
 * Para exportar a layout: <Header />
 *
 */
function Header(props) {
  const classes = useStyles();
  let history = useHistory();
  const { sections, title, user } = props;
  const [search, setSearch] = React.useState()

  const url = user ? `/User/${user}` : "/SignIn"

  const handleChange = (e) =>{
    setSearch(e.target.value)
  }

  const handleSumbit = () =>{
    console.log(search)
    history.push(`/SearchResults/${search}`)
  }

  const handleClick = () =>{
    sessionStorage.removeItem('user');
    alert("Has salido de tu sesion")
    window.location.reload();
  }

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
       

          {user? 
          <>
           <Link href={url} className={classes.user}>
          <Avatar>{user[0]}</Avatar>
          </Link>
          <Button variant="outlined" size="small" style={{marginLeft: "10px"}}
          onClick={handleClick}
        >
          Logout
        </Button>
        </>
          :
           <Link href={url} className={classes.user}>
           <Button variant="outlined" size="small">
          Sign In
        </Button>
        </Link>
        }


  

        <Link
            color="inherit"
            href={"/"}
          className={classes.toolbarTitle}>
                    <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          PelisChidas.com
        </Typography>
          </Link>




        <div className={classes.search}>
          <div className={classes.searchIcon}>
          <SearchIcon />
          </div>
          <Autocomplete
        freeSolo
        openOnFocus
        options={props.autocomplete.map((option) => option.title)}
        renderInput={(params) => (
        <InputBase
              placeholder="Search…"
              ref={params.InputProps.ref}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              onChange={handleChange}
            inputProps={params.inputProps}
            />
        )}
      />
          </div>


        

        <Button variant= "primary" size="small" onClick={handleSumbit}>Buscar</Button>
      </Toolbar>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
