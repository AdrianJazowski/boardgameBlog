/** @format */

import { actionsTypes } from "../actions/actionsTypes";

const initialState = {
  user: null,
  initalPosts: [],
  posts: [],
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

    case actionsTypes.GET_POSTS:
      return {
        ...state,
        posts: [...payload],
        initalPosts: [...payload],
      };
    case actionsTypes.LIKE_POST:
      const postsAfterLike = state.posts.map((post) => {
        if (post.postId === payload) {
          post.likeCounter++;
        }
        return post;
      });
      return {
        ...state,
        posts: [...postsAfterLike],
      };

    case actionsTypes.SEARCH_POSTS:
      return {
        ...state,
        posts: [...payload],
      };
    default:
      return state;
  }
};

export default reducer;
