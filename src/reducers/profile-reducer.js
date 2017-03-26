import * as con from 'constants/profile-constants';

const initialState = {
  user: {},
  allUsers: []
};

export default function profileReducer(state = initialState, action) {
  switch (action.type) {
    case con.GET_USER_PROFILE:
      return {...state, user: action.payload.user};

    case con.GET_ALL_USERS:
      return {...state, allUsers: action.payload.allUsers};

    default:
      return state;
  }
}