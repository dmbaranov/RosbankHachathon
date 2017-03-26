import axios from 'axios';
import * as con from 'constants/profile-constants';

export function getCurrentProfile() {
  return dispatch => {
    axios.get('http://rsb-linuxvm-13.northeurope.cloudapp.azure.com:8080/api/user?api_token=token-14')
      .then(response => {
        dispatch({
          type: con.GET_USER_PROFILE,
          payload: {
            user: response.data
          }
        });
      });
  };
}

export function getAllUsers() {
  return dispatch => {
    axios.get('http://rsb-linuxvm-13.northeurope.cloudapp.azure.com:8080/api/users?api_token=token-14')
      .then(response => {
        dispatch({
          type: con.GET_ALL_USERS,
          payload: {
            allUsers: response.data
          }
        });
      });
  };
}