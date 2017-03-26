import * as con from 'constants/badges-constants';

const initialState = {
  badges: []
};

export default function badgesReducer(state = initialState, action) {
  switch (action.type) {
    case con.GET_BADGES:
      return {...state, badges: action.payload.badges};

    default:
      return state;
  }
}