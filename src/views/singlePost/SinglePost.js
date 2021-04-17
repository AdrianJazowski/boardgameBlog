/** @format */

import React from "react";
import Post from "../../componenets/post/Post";

const SinglePost = (props) => {
  const { post } = props.location.state;
  return <Post {...post} singlePostView />;
};

export default SinglePost;
