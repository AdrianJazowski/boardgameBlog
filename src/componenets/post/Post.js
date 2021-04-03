/** @format */

import React, { useState } from "react";
import {
  PostInfo,
  PostWrapper,
  PostHeader,
  PostBody,
  PostButtons,
  LikeCounter,
} from "./PostStyles";
import ChatIcon from "@material-ui/icons/Chat";
import ShareIcon from "@material-ui/icons/Share";
import SendIcon from "@material-ui/icons/Send";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import IconOptions from "../iconOptions/IconOptions";
import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";
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
  const [temporaryLike, setTemporaryLike] = useState();
  const selectedUser = useSelector(({ user }) => user);
  const handleLikePost = () => {
    const upadtedLikeCounter = likeCounter + 1;
    likePost(postId, upadtedLikeCounter);

    const updatedLikedPosts = [...selectedUser.likedPosts, postId];

    addPostToLikedPosts(selectedUser.uid, updatedLikedPosts);
    setTemporaryLike(true);
  };

  const isLiked = selectedUser.likedPosts.includes(postId) ? true : false;

  return (
    <PostWrapper>
      <PostHeader>
        <PostInfo>{postTitle}</PostInfo>
        <LikeCounter>
          {likeCounter !== 0 ? likeCounter : null}
          <ArrowUpwardOutlinedIcon />
        </LikeCounter>
      </PostHeader>
      <PostBody>{postDescription}</PostBody>
      <PostButtons>
        <IconOptions
          Icon={ThumbUpIcon}
          title="Like"
          color={
            isLiked
              ? isLiked
                ? "#2d76ece3"
                : "grey"
              : temporaryLike
              ? "#2d76ece3"
              : "grey"
          }
          onClickFn={handleLikePost}
          isLiked={isLiked}
          temporaryLike={temporaryLike}
        />
        <IconOptions Icon={ChatIcon} title="Comments" color="grey" />
        <IconOptions Icon={ShareIcon} title="Share" color="grey" />
        <IconOptions Icon={SendIcon} title="Send" color="grey" />
      </PostButtons>
      <p>{postAuthor}</p>
    </PostWrapper>
  );
};

export default Post;
