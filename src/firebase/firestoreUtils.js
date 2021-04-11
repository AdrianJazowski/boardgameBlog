/** @format */

import { firestore } from "./firebaseConfig";
import firebase from "firebase/app";

export const postsCollection = firestore.collection("posts");

export const usersCollections = firestore.collection("users");

export const addPostToFirestore = (post) => {
  postsCollection.add(post);
};

export const addUser = (docId, user) => {
  usersCollections.doc(docId).set({
    ...user,
  });
};

export const likePost = (postId, likeCounter, whoLikedThisPost) => {
  postsCollection.doc(postId).update({
    likeCounter,
  });
  postsCollection.doc(postId).update({
    whoLikedThisPost,
  });
};

export const addCommentToPost = (postId, comments) => {
  postsCollection
    .doc(postId)
    .update({ comments: firebase.firestore.FieldValue.arrayUnion(comments) });
};

export const addPostToLikedPosts = (userId, likedPosts) => {
  usersCollections.doc(userId).update({
    likedPosts,
  });
};

export const deletePost = (postId) => {
  postsCollection.doc(postId).delete();
};
