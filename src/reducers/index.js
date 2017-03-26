import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';

import user from 'reducers/profile-reducer';

const appReducer = combineReducers({
  routing,
  user
});

export default appReducer;