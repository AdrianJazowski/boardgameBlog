/** @format */

import React from "react";
import { useSelector } from "react-redux";
import { addCommentToPost } from "../../firebase/firestoreUtils";

import {
  WrapperForCommentsComponent,
  CommentsLi,
  FormInComments,
  CommentsWrapper,
  OneCommentAuthorAndContents,
} from "./CommentsStyles";

const Comments = ({ comments, visible, postId }) => {
  const selectedUser = useSelector(({ user }) => user);
  const handleAddcomment = (e) => {
    e.preventDefault();

    const commentContents = e.target.comment.value;

    const newComment = {
      commentAuthorName: selectedUser.userName,
      commentContents,
    };
    addCommentToPost(postId, newComment);

    e.target.reset();
  };

  return (
    <>
      <WrapperForCommentsComponent visible={visible}>
        <FormInComments onSubmit={handleAddcomment}>
          <input
            name="comment"
            type="text"
            placeholder="wpisz swój komentarz"
          />
          <button type="submit">wyslij</button>
        </FormInComments>

        {comments ? (
          <CommentsWrapper>
            {comments.map((comment) => {
              const { commentAuthorName, commentContents } = comment;
              return (
                <CommentsLi key={commentAuthorName + commentContents}>
                  <OneCommentAuthorAndContents>
                    <p>{commentAuthorName}</p>
                    <h4>{commentContents}</h4>
                  </OneCommentAuthorAndContents>
                </CommentsLi>
              );
            })}
          </CommentsWrapper>
        ) : null}
      </WrapperForCommentsComponent>
    </>
  );
};

export default Comments;
