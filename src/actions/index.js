/** @format */
import { actionsTypes } from "./actionsTypes";
export const loginAdmin = (adminId) => ({
  type: actionsTypes.LOGIN_ADMIN,
  payload: adminId,
});
