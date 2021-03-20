/** @format */

import { firestore } from "./firebaseConfig";

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
