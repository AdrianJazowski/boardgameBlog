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
import { addPostToLikedPosts, likePost } from "../../firebase/firestoreUtils";
import { useSelector } from "react-redux";

const Post = ({
  comments,
  postId,
  likeCounter,
  postAuthor,
  postDescription,
  postTitle,
  post,
}) => {
  const selectedUser = useSelector(({ user }) => user);
  const handleLikePost = () => {
    const upadtedLikeCounter = likeCounter + 1;
    likePost(postId, upadtedLikeCounter);

    const updatedLikedPosts = [...selectedUser.likedPosts, postId];

    addPostToLikedPosts(selectedUser.uid, updatedLikedPosts);
    window.location.reload(true);
  };

  const isLiked = selectedUser.likedPosts.includes(postId) ? true : false;

  return (
    <PostWrapper>
      <PostHeader>
        <PostInfo>{postTitle}</PostInfo>
      </PostHeader>
      <PostBody>{postDescription}</PostBody>
      <p>{likeCounter}</p>
      <PostButtons>
        <InputOption
          Icon={ThumbUpIcon}
          title="Like"
          color="grey"
          onClickFn={handleLikePost}
          isLiked={isLiked}
        />
        <InputOption Icon={ChatIcon} title="Comments" color="grey" />
        <InputOption Icon={ShareIcon} title="Share" color="grey" />
        <InputOption Icon={SendIcon} title="Send" color="grey" />
      </PostButtons>
      <p>{postAuthor}</p>
    </PostWrapper>
  );
};

export default Post;
