// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER,
  appId: process.env.REACT_APP_APP_ID,
};

// REACT_APP_FIREBASE_API_KEY=AIzaSyBGReuH3ntrO4EapkwODfpWt2WRTk_PFr8
// REACT_APP_FIREBASE_AUTH_DOMAIN=notflex-29aac.firebaseapp.com
// REACT_APP_FIREBASE_PROJECT_ID=notflex-29aac
// REACT_APP_FIREBASE_STORAGE_BUCKET=notflex-29aac.appspot.com
// REACT_APP_MESSAGING_SENDER=348189661653
// REACT_APP_APP_ID=1:348189661653:web:b9e52c4955342ff181855c

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
