/** @format */

import React, { useEffect, useState } from "react";
import { postsCollection } from "../../firebase/firestoreUtils";
import AddPost from "../addPost/AddPost";
import Post from "../post/Post";
import { ContentWrapper } from "./ContentStyles";

const Content = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const subscribe = postsCollection.onSnapshot((snapshot) => {
      const dataFromPostsCollection = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setPosts(dataFromPostsCollection);
    });

    return () => {
      subscribe();
    };
  }, []);

  return (
    <ContentWrapper>
      {posts.map((post) => {
        const { productName, description, coments, id, author } = post;
        return (
          <Post
            productName={productName}
            description={description}
            coments={coments}
            id={id}
            author={author}
          />
        );
      })}
      <AddPost />
    </ContentWrapper>
  );
};

export default Content;
