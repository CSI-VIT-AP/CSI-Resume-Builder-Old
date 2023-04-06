// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXwo2skU7NLUqFXjJY6zmGYRSF_DlfKwA",
  authDomain: "resume-builder-ebe40.firebaseapp.com",
  projectId: "resume-builder-ebe40",
  storageBucket: "resume-builder-ebe40.appspot.com",
  messagingSenderId: "203067312029",
  appId: "1:203067312029:web:66d4789e9b095b65a95174",
  measurementId: "G-X95YVZB3G9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
//Enabling authentication
export const auth = getAuth(app)