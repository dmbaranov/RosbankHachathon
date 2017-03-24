import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from 'containers/app/app-container';
import MainPage from 'pages/main/main-page';
import ProfilePage from 'pages/profile/profile-page';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={MainPage}/>
    <Route path='/profile' component={ProfilePage}/>
  </Route>
);