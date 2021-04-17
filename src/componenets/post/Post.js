/** @format */

import React, { useState } from "react";
import {
  PostInfo,
  PostWrapper,
  PostHeader,
  PostBody,
  PostButtons,
  LikeCounter,
  AuthorAndDelete,
} from "./PostStyles";
import ChatIcon from "@material-ui/icons/Chat";
import ShareIcon from "@material-ui/icons/Share";
import SendIcon from "@material-ui/icons/Send";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import IconOptions from "../iconOptions/IconOptions";
import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";
import { deletePost, likePost } from "../../firebase/firestoreUtils";
import { useSelector } from "react-redux";
import Coments from "../coments/Comments";
import Alert from "../alert/Alert";

const Post = ({
  comments,
  postId,
  likeCounter,
  postAuthor,
  postDescription,
  postTitle,
  post,
  whoLikedThisPost,
  authorUid,
  singlePostView,
}) => {
  const [visible, setVisible] = useState(false);
  const selectedUser = useSelector(({ user }) => user);
  const handleLikePost = () => {
    const upadtedLikeCounter = likeCounter + 1;
    const newWhoLikedThisPost = [...whoLikedThisPost, selectedUser.uid];
    likePost(postId, upadtedLikeCounter, newWhoLikedThisPost);
  };
  const handleShowComents = () => {
    setVisible(!visible);
  };
  const handleDeletePost = () => {
    deletePost(postId);
  };

  const isLiked =
    whoLikedThisPost.lenght <= 0
      ? null
      : whoLikedThisPost.includes(selectedUser.uid)
      ? true
      : false;

  return (
    <>
      <PostWrapper>
        <PostHeader>
          {singlePostView ? (
            <h2>{postTitle}</h2>
          ) : (
            <PostInfo
              to={{
                pathname: `/post/${postTitle.replace(/\s/g, "")}`,
                state: {
                  post,
                },
              }}
            >
              {postTitle}
            </PostInfo>
          )}
          {likeCounter !== 0 ? (
            <LikeCounter>
              {likeCounter}
              <ArrowUpwardOutlinedIcon />
            </LikeCounter>
          ) : null}
        </PostHeader>
        <PostBody>{postDescription}</PostBody>
        <PostButtons>
          <IconOptions
            Icon={ThumbUpIcon}
            title="Like"
            color={isLiked ? "#ffc033" : "grey"}
            onClickFn={() => {
              handleLikePost();
            }}
            isLiked={isLiked}
          />
          <IconOptions
            Icon={ChatIcon}
            onClickFn={handleShowComents}
            title="Comments"
            color="grey"
          />
          <IconOptions Icon={ShareIcon} title="Share" color="grey" />
          <IconOptions Icon={SendIcon} title="Send" color="grey" />
        </PostButtons>
        <AuthorAndDelete>
          <p> Author: {postAuthor}</p>
          {selectedUser.uid === authorUid ? (
            <Alert handleDeletePost={handleDeletePost} />
          ) : null}
        </AuthorAndDelete>

        <Coments visible={visible} comments={comments} postId={postId} />
      </PostWrapper>
    </>
  );
};

export default Post;
