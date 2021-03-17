/** @format */

import React from "react";
import { addPostToFirestore } from "../../firebase/firestoreUtils";
import {
  AddPostForm,
  AddPostInput,
  AddPostTextarea,
  AddPostWrapper,
} from "./AddPostStyles";

const AddPost = () => {
  const handleAddPostForm = (e) => {
    e.preventDefault();

    const postName = e.target.postName.value;
    const postDescription = e.target.postDesc.value;

    const newPost = {
      productName: postName,
      postDescription,
    };

    addPostToFirestore(newPost);

    e.target.reset();
  };

  return (
    <AddPostWrapper>
      <AddPostForm onSubmit={handleAddPostForm}>
        <AddPostInput type="text" placeholder="name" name="postName" />
        <AddPostTextarea name="postDesc" id="" cols="30" rows="10" />
        <button>add post</button>
      </AddPostForm>
    </AddPostWrapper>
  );
};

export default AddPost;
