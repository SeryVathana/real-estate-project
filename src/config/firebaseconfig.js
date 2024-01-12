// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDBex-FP1objp66bNT_Ega6rzgQjse6QCs',
  authDomain: 'tidal-vim-383010.firebaseapp.com',
  projectId: 'tidal-vim-383010',
  storageBucket: 'tidal-vim-383010.appspot.com',
  messagingSenderId: '862694334793',
  appId: '1:862694334793:web:46f78b850b4140483fba98',
  measurementId: 'G-WJKFE4PZCL',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
