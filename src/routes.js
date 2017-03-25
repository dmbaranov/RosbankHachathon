import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from 'containers/app/app-container';
import MainPage from 'pages/main/main-page';
import ProfilePage from 'pages/profile/profile-page';
import BadgesPage from 'pages/badges/badges-page';
import MarketPage from 'pages/market/market-page';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={MainPage}/>
    <Route path='/profile' component={ProfilePage}/>
    <Route path='/badges' component={BadgesPage}/>
    <Route path='/market' component={MarketPage}/>
  </Route>
);