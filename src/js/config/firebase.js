// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-p7bjmoU3GGtKIQTkphWEgNBAWbKd__k",
  authDomain: "busybuy-3861b.firebaseapp.com",
  projectId: "busybuy-3861b",
  storageBucket: "busybuy-3861b.appspot.com",
  messagingSenderId: "276181218299",
  appId: "1:276181218299:web:35aa57935ac3f2fbf3d15e"
};

// console.log(process.env);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
setPersistence(auth, browserLocalPersistence);
export { db };
