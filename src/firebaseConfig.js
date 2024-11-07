// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration (copy from the Firebase Console)
const firebaseConfig = {
    apiKey: "AIzaSyAWAFdPOwNG3iB1KzamIKTYRgUTqW_SUAA",
    authDomain: "cookingmace.firebaseapp.com",
    projectId: "cookingmace",
    storageBucket: "cookingmace.appspot.com",
    messagingSenderId: "508311711711",
    appId: "1:508311711711:web:82793f232c10a3a875de6a",
    measurementId: "G-P2PTWEEXFL"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Google Provider
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();