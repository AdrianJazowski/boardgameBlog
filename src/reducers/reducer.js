/** @format */

import { actionsTypes } from "../actions/actionsTypes";

const initialState = {
  admin: null,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionsTypes.LOGIN_ADMIN:
      return {
        ...state,
        admin: payload,
      };

    default:
      return state;
  }
};

export default reducer;
