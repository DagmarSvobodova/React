import {

  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HeaderComponent from '../layout/HeaderComponent';
import FetchingComponent from '../GeneralComponents/FetchingComponent';
import FooterComponent from '../layout/FooterComponent';
import SearchForm from '../GeneralComponents/SearchForm';


function Routes() {
  return (
    <Router>
      <HeaderComponent /> 
        <Switch>
            <Route exact path="/" children={ <FetchingComponent url="http://hp-api.herokuapp.com/api/characters" pageNumber = {0}  /> } />
           <Route exact path="/all" children={ <FetchingComponent url="http://hp-api.herokuapp.com/api/characters" pageNumber = {1}  /> } />
           <Route exact path="/students" children={ <FetchingComponent url="http://hp-api.herokuapp.com/api/characters/students" pageNumber = {2}  /> } />
           <Route exact path="/staff" children={ <FetchingComponent url="http://hp-api.herokuapp.com/api/characters/staff" pageNumber = {3}  /> } />
           <Route exact path="/staff" children={ <FetchingComponent url="http://hp-api.herokuapp.com/api/characters/staff" pageNumber = {3}  /> } />
           <Route exact path="/search" children={ <SearchForm /> } />

        </Switch>
        <FooterComponent/>
    </Router>
  );
}

export default Routes;
