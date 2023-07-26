import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "deliveroo-clone-fe004.firebaseapp.com",
  projectId: "deliveroo-clone-fe004",
  storageBucket: "deliveroo-clone-fe004.appspot.com",
  messagingSenderId: "168498642232",
  appId: process.env.FIREBASE_API_ID
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP)
export const FIREBASE_STORAGE = getStorage(FIREBASE_APP)
