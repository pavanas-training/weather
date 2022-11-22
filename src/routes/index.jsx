import React from 'react';
import Home from '../containers/Home/index.jsx';
import Favourites from '../containers/Favourites/index.jsx';
import RecentSearch from '../containers/RecentSearch/index.jsx';
import { Redirect, Route, Switch } from 'react-router-dom';
const Routes = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Redirect to='/home'></Redirect>
      </Route>
      <Route path='/home' component={Home} />
      <Route path='/favourite' component={Favourites} />
      <Route path='/recent-search' component={RecentSearch} />
    </Switch>
  );
};

export default Routes;
