/** @format */

import React from "react";
import {
  PostInfo,
  PostWrapper,
  PostHeader,
  PostBody,
  PostButtons,
} from "./PostStyles";
import ChatIcon from "@material-ui/icons/Chat";
import ShareIcon from "@material-ui/icons/Share";
import SendIcon from "@material-ui/icons/Send";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import InputOption from "../inputOption/InputOption";

const Post = ({ productName, description, coments, id }) => {
  return (
    <PostWrapper>
      <PostHeader>
        <PostInfo>{productName}</PostInfo>
      </PostHeader>
      <PostBody>{description}</PostBody>
      <PostButtons>
        <InputOption Icon={ThumbUpIcon} title="Like" color="grey" />
        <InputOption Icon={ChatIcon} title="Comments" color="grey" />
        <InputOption Icon={ShareIcon} title="Share" color="grey" />
        <InputOption Icon={SendIcon} title="Send" color="grey" />
      </PostButtons>
    </PostWrapper>
  );
};

export default Post;
