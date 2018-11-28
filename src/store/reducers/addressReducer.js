import * as actionTypes from "../actions/actionTypes";

const initialState = {
  addresses: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ADDRESSES:
      const address = action.payload;
      return {
        ...state,
        addresses: address
      };
    case actionTypes.CREATE_ADDRESS:
      return {
        ...state,
        addresses: state.addresses.concat(action.payload)
      };
    default:
      return state;
  }
};

export default reducer;
