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
export const getPosts = (posts) => ({
  type: actionsTypes.GET_POSTS,
  payload: posts,
});

export const likePost = (postId) => ({
  type: actionsTypes.LIKE_POST,
  payload: postId,
});

export const searchPosts = (filteredPosts) => ({
  type: actionsTypes.SEARCH_POSTS,
  payload: filteredPosts,
});
