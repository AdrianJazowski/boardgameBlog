/** @format */

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { addPostToFirestore } from "../../firebase/firestoreUtils";
import { AddPostForm, AddPostWrapper, AddPostDiv } from "./AddPostStyles";
import { Redirect } from "react-router-dom";
import { routes } from "../../routes";

const AddPost = () => {
  const selectedUser = useSelector(({ user }) => user);
  const [redirectUs, setRedirectUs] = useState(false);

  const handleAddPostForm = (e) => {
    e.preventDefault();

    const postTitle = e.target.postTitle.value;
    const postDescription = e.target.postDescription.value;

    const newPost = {
      postTitle,
      postDescription,
      postAuthor: selectedUser.userName,
      comments: [],
      likeCounter: 0,
      whoLikedThisPost: [],
      authorUid: selectedUser.uid,
    };

    addPostToFirestore(newPost);

    e.target.reset();

    setRedirectUs(true);
  };

  return (
    <>
      <AddPostWrapper>
        <AddPostDiv>
          <AddPostForm onSubmit={handleAddPostForm}>
            <p>Tytuł posta</p>
            <input name="postTitle" type="text" />
            <p>Treść posta</p>
            <textarea name="postDescription" type="text" />
            <button type="submit">Wyślij</button>
          </AddPostForm>
        </AddPostDiv>
      </AddPostWrapper>
      {redirectUs ? <Redirect to={routes.home} /> : null}
    </>
  );
};

export default AddPost;
