import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './components/views/Home';
import Main from './components/views/Main';
import Profile from './components/views/Profile'

const Routerviews = () => {
      return (
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/list" component={Main}></Route>
            <Route path="/profile" component={Profile}></Route>
        </Switch>
      );
  }
  
  export default Routerviews;
