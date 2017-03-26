import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';

import user from 'reducers/profile-reducer';
import badges from 'reducers/badges-reducer';
import market from 'reducers/market-reducer';

const appReducer = combineReducers({
  routing,
  user,
  badges,
  market
});

export default appReducer;