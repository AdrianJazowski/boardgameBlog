/** @format */

import { firestore } from "./firebaseConfig";
import firebase from "firebase/app";

export const postsCollection = firestore.collection("posts");

export const usersCollections = firestore.collection("users");

export const addPostToFirestore = (post) => {
  postsCollection.add(post).then((post) => console.log(post));
};

export const addUser = (docId, user) => {
  usersCollections.doc(docId).set({
    ...user,
  });
};

export const likePost = (postId, likeCounter) => {
  postsCollection.doc(postId).update({
    likeCounter,
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
