// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDD5PtPWRnKUKj4V_0Hmh5q7rU5F50N1bI",
  authDomain: "clothy-6050e.firebaseapp.com",
  projectId: "clothy-6050e",
  storageBucket: "clothy-6050e.appspot.com",
  messagingSenderId: "237154319473",
  appId: "1:237154319473:web:109d525f795c90b4a5efd0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);
export default auth;