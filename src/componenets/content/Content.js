/** @format */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../actions";
import { postsCollection } from "../../firebase/firestoreUtils";
import Post from "../post/Post";
import { ContentWrapper } from "./ContentStyles";

const Content = () => {
  const dispatch = useDispatch();
  const posts = useSelector(({ posts }) => posts);
  useEffect(() => {
    const subscribe = postsCollection.onSnapshot((snapshot) => {
      const dataFromPostsCollection = snapshot.docs.map((doc) => ({
        postId: doc.id,
        ...doc.data(),
      }));

      dispatch(getPosts(dataFromPostsCollection));
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
