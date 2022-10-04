import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.GATSBY_FIREBASE_APIKEY,
  authDomain: process.env.GATSBY_FIREBASE_AUTHDOMAIN,
  projectId: process.env.GATSBY_FIREBASE_PROJECTID,
  storageBucket: process.env.GATSBY_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.GATSBY_FIREBASE_APPID
};

let app;
let auth;

if (typeof window !== "undefined") {
  app = app || initializeApp(firebaseConfig);
  auth = getAuth(app);
}

export { auth, onAuthStateChanged };
