// src/theme/firebase.js
import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/auth";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";

// Initialize Firebase with your configuration
const app = firebase.initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
});

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const logout = (afterAction = () => {}) => {
  signOut(auth).then(() => afterAction(null));
};

export const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;

    if (user && user.email.endsWith("@fabaf.in")) {
      // User is allowed, proceed with your app logic
      console.log("User authenticated:", user);
    } else {
      // User email domain not allowed, sign them out
      await signOut(auth);
      alert("You must sign in with a @fabaf.in email address.");
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
