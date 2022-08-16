// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkGQIZXh3wGzbsJlIWzYNhxezYH2jatOg",
  authDomain: "email-pass-auth0.firebaseapp.com",
  projectId: "email-pass-auth0",
  storageBucket: "email-pass-auth0.appspot.com",
  messagingSenderId: "554380915212",
  appId: "1:554380915212:web:32f5bab88732d41a243429",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
