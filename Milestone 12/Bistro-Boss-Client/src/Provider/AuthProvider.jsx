import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import useAxiosPublic from '../Hooks/useAxiosPublic';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const GoogleProvider = new GoogleAuthProvider();
  const axiosPublic = useAxiosPublic();

  const googleSignIn = () =>{
    setLoading(true);
    return signInWithPopup(auth, GoogleProvider)
  }
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (name,photoUrl='') =>{
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name, photoURL: photoUrl
    })
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      if(currentUser){
        const email = {email: currentUser.email};
        axiosPublic.post('/generate-token', email)
        .then(res=>{
          if(res.data.token){
            localStorage.setItem('access-token', res.data.token)
          }
        })
      }
      else{
        localStorage.removeItem('access-token')
      }
    });
    return () => {
      return unSubscribe();
    };
  }, []);

  const authData = {
    user,
    loading,
    createUser,
    googleSignIn,
    logIn,
    logOut,
    updateUserProfile
  };
  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
