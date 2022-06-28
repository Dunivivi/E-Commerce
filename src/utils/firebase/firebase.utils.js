import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { doc, getFirestore, getDoc, setDoc } from "firebase/firestore";

// import {
//     doc,
//     getFirestore
// } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgMt4bqr7LteSMtt9X6Cc8h-oUrY6hScI",
  authDomain: "crwn-clothing-db-91136.firebaseapp.com",
  projectId: "crwn-clothing-db-91136",
  storageBucket: "crwn-clothing-db-91136.appspot.com",
  messagingSenderId: "149771660800",
  appId: "1:149771660800:web:d3fc26de499e816cfc32e5",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.error("Error creating the user", error.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createAuthUserWithEmailAndPassword(auth, email, password);
};
