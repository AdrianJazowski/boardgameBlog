/** @format */
import { actionsTypes } from "./actionsTypes";
export const loginUser = (user) => ({
  type: actionsTypes.LOGIN_USER,
  payload: user,
});
export const logoutUser = (user) => ({
  type: actionsTypes.LOGOUT_USER,
  payload: user,
});
