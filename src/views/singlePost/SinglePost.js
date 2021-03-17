/** @format */

import React from "react";
import Sidebar from "../../componenets/sidebar/Sidebar";
import {
  PostContents,
  PostImg,
  PostTitle,
  SinglePostWrapper,
  PostDescription,
} from "./SinglePostStyles";

const SinglePost = (props) => {
  console.log(props);

  const { productName, photo, postDescription } = props.location.state;
  return (
    <SinglePostWrapper>
      <PostContents>
        <PostImg src={photo} />
        <PostTitle>{productName}</PostTitle>
        <PostDescription>{postDescription}</PostDescription>
      </PostContents>
      <Sidebar />
    </SinglePostWrapper>
  );
};

export default SinglePost;
