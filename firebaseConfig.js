// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeLBZmY1M4_bO6EfcDY-YPCUJ3cCdSCvg",
  authDomain: "kuna-c2e0d.firebaseapp.com",
  projectId: "kuna-c2e0d",
  storageBucket: "kuna-c2e0d.appspot.com",
  messagingSenderId: "930194844260",
  appId: "1:930194844260:web:9dc751088c7dbab92d4d71",
  measurementId: "G-T46REW7CSL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase