import { initializeApp } from "firebase/app"; 
import {getFirestore} from "firebase/firestore"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: "movie-clone-a8629.firebaseapp.com",
  projectId: "movie-clone-a8629",
  storageBucket: "movie-clone-a8629.appspot.com",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp); 

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged };
export default db;
