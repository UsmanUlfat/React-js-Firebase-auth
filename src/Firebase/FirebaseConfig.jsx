// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCLot6D8jY64g4PR0UANIgQjw6zXBDlZ8",
  authDomain: "login-auth-367f5.firebaseapp.com",
  projectId: "login-auth-367f5",
  storageBucket: "login-auth-367f5.firebasestorage.app",
  messagingSenderId: "565980966332",
  appId: "1:565980966332:web:24c04ae29764219295cfb9",
  measurementId: "G-N8308L9M8C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth =getAuth(app);