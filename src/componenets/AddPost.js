/** @format */

import React from "react";
import { addPostToFirestore } from "../firebase/firestoreUtils";

const AddPost = () => {
  const handleAddPostForm = (e) => {
    e.preventDefault();

    const postName = e.target.postName.value;
    const photo = e.target.postImage.value;
    const postDescription = e.target.postDesc.value;

    const newPost = {
      productName: postName,
      photo,
      postDescription,
    };

    addPostToFirestore(newPost);

    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleAddPostForm}>
        <input type="text" placeholder="name" name="postName" />
        <input type="text" placeholder="image" name="postImage" />
        {/* <input type="file" name="postImage2" /> */}
        <textarea name="postDesc" id="" cols="30" rows="10" />
        <button>add post</button>
      </form>
    </div>
  );
};

export default AddPost;
