import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyB8yfvUDZvtPAStuhXBkmwKQK_eL4TL3bs",
  authDomain: "sixty-ninth-street.firebaseapp.com",
  projectId: "sixty-ninth-street",
  storageBucket: "sixty-ninth-street.appspot.com",
  messagingSenderId: "355947447683",
  appId: "1:355947447683:web:89a440a885dd70e19562b6",
});

export const authentication = app.auth();
export default app;
