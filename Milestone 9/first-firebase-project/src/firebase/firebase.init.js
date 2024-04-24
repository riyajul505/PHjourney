// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDc8IydVrzbivkeVajdv8rDpakDx6gKHKw",
  authDomain: "first-firebase-project-eaa5a.firebaseapp.com",
  projectId: "first-firebase-project-eaa5a",
  storageBucket: "first-firebase-project-eaa5a.appspot.com",
  messagingSenderId: "185266721421",
  appId: "1:185266721421:web:e50624d793acbf799a88c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;