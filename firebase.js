<<<<<<< HEAD
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAAGOqn66M7TVTzfL5u0EeA-NBWkbGgu0",
  authDomain: "quiz-b229e.firebaseapp.com",
  projectId: "quiz-b229e",
  storageBucket: "quiz-b229e.firebasestorage.app",
  messagingSenderId: "418890610117",
  appId: "1:418890610117:web:3dee610a03bfacb21047ac",
  measurementId: "G-X0ZG6ECP2S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
=======
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAAGOqn66M7TVTzfL5u0EeA-NBWkbGgu0",
  authDomain: "quiz-b229e.firebaseapp.com",
  projectId: "quiz-b229e",
  storageBucket: "quiz-b229e.firebasestorage.app",
  messagingSenderId: "418890610117",
  appId: "1:418890610117:web:3dee610a03bfacb21047ac",
  measurementId: "G-X0ZG6ECP2S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
>>>>>>> 0e406f7240c13edf8d53329b9cc8171a8e2f9840
const analytics = getAnalytics(app);