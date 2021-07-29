import React from 'react';
import {Switch, Route} from "react-router-dom"
import Home from './pages/Home';
import Starred from './pages/Starred';
import ShowInfo from './ShowInfo';
import './App.css'

function App() {
  return (
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/starred">
          <Starred/>
        </Route>
        <Route exact path="/show/:id">
          <ShowInfo/>
        </Route>
        <Route>page 404</Route>
      </Switch>
      
  );
}

export default App;
