// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2riSFhoOtHeckf3vn6MoRxjg1dSuP9_k",
  authDomain: "the-dragon-news-f1624.firebaseapp.com",
  projectId: "the-dragon-news-f1624",
  storageBucket: "the-dragon-news-f1624.appspot.com",
  messagingSenderId: "782743144231",
  appId: "1:782743144231:web:fa45a2a26d1eb66a400b02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;