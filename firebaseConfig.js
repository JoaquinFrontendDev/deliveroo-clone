import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB_-i1vk8IkP3JeRHj-cJ7OtjTPiUjVgU0",
  authDomain: "deliveroo-clone-fe004.firebaseapp.com",
  projectId: "deliveroo-clone-fe004",
  storageBucket: "deliveroo-clone-fe004.appspot.com",
  messagingSenderId: "168498642232",
  appId: "1:168498642232:web:c6a15ded8f3fdaa5d855cd"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP)
