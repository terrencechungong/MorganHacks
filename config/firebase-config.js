// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAs8gB8qgt1Hcc_X6vR1aUxDmLC5q8FNFc",
  authDomain: "take-note-69bbl.firebaseapp.com",
  projectId: "take-note-69bbl",
  storageBucket: "take-note-69bbl.appspot.com",
  messagingSenderId: "740556159694",
  appId: "1:740556159694:web:56d8d3414fc92aaa5fee9f",
  measurementId: "G-SEPX3WLGEL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

//npm install -g firebase-tools