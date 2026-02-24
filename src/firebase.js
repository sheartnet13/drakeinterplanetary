// src/firebase.js
// Import package npm
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAarL7GefcaH1i3Ze3nq2DgZ-5k5Bzr2ls",
  authDomain: "jobs-d4e94.firebaseapp.com",
  projectId: "jobs-d4e94",
  storageBucket: "jobs-d4e94.appspot.com",
  messagingSenderId: "861818804421",
  appId: "1:861818804421:web:97fa51b05355f8ba3e38ac",
  measurementId: "G-1KD6DNYDZ7"
};

// Inicialization Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export Firestore
export const db = getFirestore(app);