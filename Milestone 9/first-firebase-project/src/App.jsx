import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import "./App.css";
import app from "./firebase/firebase.init";
function App() {
  const [newUser, setNewUser] = useState(null);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const handleGoogleSingIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setNewUser(user);
      })
      .catch((error) => console.log("error", error.message));
  };
  const handleSignOut = () => {
    signOut(auth)
      .then((result) => {
        console.log(result);
        setNewUser(null);
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <h1 className="text-2xl">Google login</h1>
      {
        newUser ? <button onClick={handleSignOut} className="btn btn-secondary">
        Sign Out
      </button> : <button onClick={handleGoogleSingIn} className="btn btn-primary">
        Google Login
      </button>
      }
      {newUser && <h2>User: {newUser?.displayName}</h2>}
      
      
    </>
  );
}

export default App;
