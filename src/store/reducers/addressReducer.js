import * as actionTypes from "../actions/actionTypes";

const initialState = {
  addresses: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ADDRESSES:
      console.log(action.payload.addresses);
      const address = action.payload.addresses;
      return {
        ...state,
        addresses: address.filter(
          address => address.user === action.payload.user.user_id
        )
      };
    default:
      return state;
  }
};

export default reducer;
