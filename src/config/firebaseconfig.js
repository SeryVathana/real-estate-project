// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBchQ-kLOhhV6pUutSi3l9naWZ_kWhVaGw",
  authDomain: "real-estate-1be68.firebaseapp.com",
  projectId: "real-estate-1be68",
  storageBucket: "real-estate-1be68.appspot.com",
  messagingSenderId: "918862731926",
  appId: "1:918862731926:web:f90dfbc3ee96e9228780b7",
  measurementId: "G-TW0QWL6VEW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);