// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYTZzenrIp7mtpzqjHyTLSKKewrn_xwYs",
  authDomain: "auth-rl.firebaseapp.com",
  projectId: "auth-rl",
  storageBucket: "auth-rl.appspot.com",
  messagingSenderId: "390747471288",
  appId: "1:390747471288:web:11cad5016b573548dbe34d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;