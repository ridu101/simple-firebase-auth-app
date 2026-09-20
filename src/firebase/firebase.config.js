// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrYPNnxnixPEGkd6nsDErFn703XL1qAnA",
  authDomain: "first-firebase-app-398f4.firebaseapp.com",
  projectId: "first-firebase-app-398f4",
  storageBucket: "first-firebase-app-398f4.firebasestorage.app",
  messagingSenderId: "963062464704",
  appId: "1:963062464704:web:5cfc1d617f3c312385ad25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);