import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { authentication } from "../../firebase";
import axios from "axios";
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
  const [currentUser, setCurrentUser] = useState({
    user_name: "",
    user_email: "",
    user_phone: "01717-",
  });
  console.log("this is currentUser", currentUser);
  const [tokenId, setTokenId] = useState("");
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  useEffect(() => {
    if (tokenId.length) {
      axios({
        method: "POST",
        url: "http://localhost:5000/api/googlelogin",
        data: { tokenId: tokenId },
      }).then((response) => {
        console.log("Google signed in completed successfully", response);
      });
      console.log("working");
    }
  }, [tokenId]);

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
    return signInWithPopup(auth, provider).then((userCredentials) => {
      console.log(userCredentials._tokenResponse.idToken);
      setTokenId(userCredentials._tokenResponse.idToken);
    });
  }

  function logout() {
    return auth.signOut();
  }
  // function updateUserPassword(user, newPassword) {
  //   return authentication
  //     .updatePassword(user, newPassword)
  //     .then(() => {
  //       // Update successful.
  //     })
  //     .catch((error) => {
  //       // An error ocurred
  //       // ...
  //     });
  // }

  useEffect(() => {
    const unsubscribe = authentication.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser({
          user_name: user._delegate.displayName,
          user_email: user._delegate.email,
          user_phone: "01717-",
        });
        localStorage.setItem(
          "userInfo",
          JSON.stringify({
            user_name: user._delegate.displayName,
            user_email: user._delegate.email,
            user_phone: "01717-",
          })
        );
      }
      console.log("....................test auth", user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    setCurrentUser,
    signUp,
    login,
    signInWithGoogle,
    // updateUserPassword,
    logout,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
