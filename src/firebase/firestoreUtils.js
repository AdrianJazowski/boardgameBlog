/** @format */

import { firestore } from "./firebaseConfig";

export const postsCollection = firestore.collection("posts");

export const addPostToFirestore = (post) => {
  postsCollection.add(post);
};
