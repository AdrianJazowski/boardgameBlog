/** @format */

import React, { useEffect, useState } from "react";
import { postsCollection } from "../../firebase/firestoreUtils";
import Post from "../post/Post";
import { ContentWrapper } from "./ContentStyles";

const Content = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const subscribe = postsCollection.onSnapshot((snapshot) => {
      const dataFromPostsCollection = snapshot.docs.map((doc) => ({
        postId: doc.id,
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
        return <Post {...post} post={post} />;
      })}
    </ContentWrapper>
  );
};

export default Content;
