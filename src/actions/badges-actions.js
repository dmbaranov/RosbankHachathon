import axios from 'axios';
import * as con from 'constants/badges-constants';

export function getBadges() {
  return dispatch => {
    axios.get('http://rsb-linuxvm-13.northeurope.cloudapp.azure.com:8080/api/badges?api_token=token-14')
      .then(data => {
        dispatch({
          type: con.GET_BADGES,
          payload: {
            badges: data.data
          }
        });
      });
  };
}