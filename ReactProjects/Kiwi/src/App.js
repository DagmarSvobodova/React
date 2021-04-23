import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './SearchBar/Main/Main';
import Results from './Results';
import Detail from './SearchBar/Main/Detail';

function App() {
  
      
    return(
      <BrowserRouter>

      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/flight" component={Detail} />
      </Switch>
      </BrowserRouter>
    )
}

export default App;

