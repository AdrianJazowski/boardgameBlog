/** @format */

import React from "react";
import Post from "../../componenets/post/Post";
import { LikeCounter } from "../../componenets/post/PostStyles";
import {
  SinglePostWrapper,
  SinglePostHeader,
  SinglePostTitle,
  SinglePostDescription,
} from "./SinglePostStyles";

const SinglePost = (props) => {
  const {
    postTitle,
    postDescription,
    postId,
    postAuthor,
    likeCounter,
  } = props.location.state;
  console.log(postTitle);
  return (
    // <SinglePostWrapper>
    //   <SinglePostHeader>
    //     <SinglePostTitle>{postTitle}</SinglePostTitle>
    //     <LikeCounter>{likeCounter}</LikeCounter>
    //   </SinglePostHeader>
    //   <SinglePostDescription>{postDescription}</SinglePostDescription>
    // </SinglePostWrapper>
    <div>cos</div>
  );
};

export default SinglePost;
