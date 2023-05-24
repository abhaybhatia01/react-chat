// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAilHacTYdk4W4TmcMJvJt5WvyOE3YHzd4",
  authDomain: "react-chat-94734.firebaseapp.com",
  projectId: "react-chat-94734",
  storageBucket: "react-chat-94734.appspot.com",
  messagingSenderId: "96968284403",
  appId: "1:96968284403:web:3ef55270d7d65559c3ff86",
  measurementId: "G-K6YW5HXXBL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);