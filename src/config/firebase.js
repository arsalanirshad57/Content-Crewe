// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBbOC0835HkZuxHqKOJDnnCfqJ1ZtxYpvU",
    authDomain: "content-crewe.firebaseapp.com",
    projectId: "content-crewe",
    storageBucket: "content-crewe.firebasestorage.app",
    messagingSenderId: "607894102188",
    appId: "1:607894102188:web:008893f271ba92dc703f09"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
