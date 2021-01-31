/** @format */
import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA4tPdcrRIQuvpQ_AIMTUhbjr0RiRaLBN0",
  authDomain: "blog-3a26f.firebaseapp.com",
  projectId: "blog-3a26f",
  storageBucket: "blog-3a26f.appspot.com",
  messagingSenderId: "248274366399",
  appId: "1:248274366399:web:6112e8e72aabe42babfb0a",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
