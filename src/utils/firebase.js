// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBU5ENi2hF_TzFDtRjmsobta119WrAacH8",
  authDomain: "geminiflix-10feb.firebaseapp.com",
  projectId: "geminiflix-10feb",
  storageBucket: "geminiflix-10feb.firebasestorage.app",
  messagingSenderId: "413128294595",
  appId: "1:413128294595:web:bfa84ce65c68c700932276",
  measurementId: "G-KH5YB0PY4S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
