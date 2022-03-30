// Import the functions you need from the SDKs you need
// import * as firebase from "firebase";
// import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';
// import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBv1_Ww2_FkY7SEAUlpXEFLzTBGQT9YozM",
  authDomain: "fir-auth-bae40.firebaseapp.com",
  projectId: "fir-auth-bae40",
  storageBucket: "fir-auth-bae40.appspot.com",
  messagingSenderId: "832990124798",
  appId: "1:832990124798:web:665c9f6394fba79e3363af"
};

// Initialize Firebase (resolved through https://stackoverflow.com/questions/69814654/firebase-package-was-successfully-found-however-this-package-itself-specifie)
let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };