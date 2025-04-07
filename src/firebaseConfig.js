// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4kMYWI6zA2dfRjKZzXnZaO3PoSufyW4g",
  authDomain: "curriculo-1def1.firebaseapp.com",
  projectId: "curriculo-1def1",
  storageBucket: "curriculo-1def1.firebasestorage.app",
  messagingSenderId: "520629680219",
  appId: "1:520629680219:web:8beb940d1fa12536ed677e",
  measurementId: "G-0135QPQZR1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);
