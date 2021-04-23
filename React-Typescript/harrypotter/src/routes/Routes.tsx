import React from 'react';
import {

  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HeaderComponent from '../layout/HeaderComponent';
import BodyComponent from '../layout/BodyComponent';


function Routes() {
  return (
    <Router>
      <HeaderComponent /> 
        <Switch>
            <Route exact path="/" children={ <BodyComponent /> } />
           
        </Switch>
    </Router>
  );
}

export default Routes;
