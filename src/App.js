import User from "./layouts/User"
import Home from "./layouts/Home"
import Movie from "./layouts/Movie"
import Person from "./layouts/Person"
import SignIn from "./layouts/SignIn"
import SignUp from "./layouts/SignUp"
import MakeReview from "./layouts/MakeReview"
import SearchResults from "./layouts/SearchResults"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path='/' exact component={Home}/>
      <Route exact path='/Person/:type/:id' exact component={Person}/>
      <Route exact path='/Movie/:id' exact component={Movie}/>
      <Route exact path='/User/:user' exact component={User}/>
      <Route exact path='/SearchResults/:movie' exact component={SearchResults}/>
      <Route exact path='/SignIn' exact component={SignIn}/>
      <Route exact path='/SignUp' exact component={SignUp}/>
      <Route exact path='/MakeReview/:user/:movie' exact component={MakeReview}/>
    </Switch>
  );
}

export default App;
