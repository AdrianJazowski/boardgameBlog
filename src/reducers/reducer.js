/** @format */

import { actionsTypes } from "../actions/actionsTypes";

const initialState = {
  user: null,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionsTypes.LOGIN_USER:
      return {
        ...state,
        user: payload,
      };
    case actionsTypes.LOGOUT_USER:
      return {
        ...state,
        user: payload,
      };

    default:
      return state;
  }
};

export default reducer;
