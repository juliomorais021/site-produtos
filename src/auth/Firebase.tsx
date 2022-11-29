// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbnS0SAxVsNW6XJYbp_sQcGHz1-_dFyh8",
  authDomain: "marketing-fb0fa.firebaseapp.com",
  projectId: "marketing-fb0fa",
  storageBucket: "marketing-fb0fa.appspot.com",
  messagingSenderId: "329846309396",
  appId: "1:329846309396:web:364cf0e0986d1e88fa5d01",
  measurementId: "G-7LGZ5C1KPG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;

