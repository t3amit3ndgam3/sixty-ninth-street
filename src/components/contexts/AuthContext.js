import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { authentication } from "../../firebase";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  function signUp(email, password, name) {
    return authentication
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        updateProfile(auth.currentUser, { displayName: name });
      })
      .catch((e) => alert(e.message));
  }

  function login(email, password) {
    return authentication
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        localStorage.setItem(
          "token",
          userCredential.user._delegate.accessToken
        );
      });
  }

  function signInWithGoogle() {
    return signInWithPopup(auth, provider);
  }

  function logout() {
    return auth.signOut();
  }
  useEffect(() => {
    const unsubscribe = authentication.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);



  const value = { currentUser, signUp, login, signInWithGoogle, logout };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
