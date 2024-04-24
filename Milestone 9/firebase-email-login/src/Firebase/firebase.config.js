// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJ-q6ETvVhzPaA34J6lJRLZMF38Tr3L7s",
  authDomain: "email-password-login-b4c78.firebaseapp.com",
  projectId: "email-password-login-b4c78",
  storageBucket: "email-password-login-b4c78.appspot.com",
  messagingSenderId: "843886606301",
  appId: "1:843886606301:web:d64e0d5cbc924069a8e834"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;