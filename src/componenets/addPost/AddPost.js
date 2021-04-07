/** @format */

import React from "react";
import { useSelector } from "react-redux";
import { addPostToFirestore } from "../../firebase/firestoreUtils";
import { AddPostForm, AddPostWrapper, AddPostDiv } from "./AddPostStyles";

const AddPost = () => {
  const selectedUser = useSelector(({ user }) => user);

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
    };

    addPostToFirestore(newPost);

    e.target.reset();
  };

  return (
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
  );
};

export default AddPost;
