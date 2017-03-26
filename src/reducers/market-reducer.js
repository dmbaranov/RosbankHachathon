import * as con from 'constants/market-constants';

const initialState = {
  goods: []
};

export default function marketReducer(state = initialState, action) {
  switch (action.type) {
    case con.GET_GOODS:
      return {...state, goods: action.payload.goods};

    default:
      return state;
  }
}