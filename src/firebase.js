// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getMessaging,onMessage, getToken} from 'firebase/messaging';

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

const messaging = getMessaging(app)

const { REACT_APP_VAPID_KEY } = process.env
const publicKey = REACT_APP_VAPID_KEY;

export const gettoken = async (setTokenFound) => {
  let currentToken = '';
  try {
    currentToken = await getToken(messaging,{vapidKey: publicKey});
    if (currentToken) {
      setTokenFound(true);
    } else {
      setTokenFound(false);
    }
  } catch (error) {
    console.log('An error occurred while retrieving token.', error);
  }
  return currentToken;
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage((payload) => {
      resolve(payload);
    });
  });
