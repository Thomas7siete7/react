// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACHSdG-LUCQu83qlMRTe66qQLpea4iILE",
  authDomain: "reactapp-c82d4.firebaseapp.com",
  projectId: "reactapp-c82d4",
  storageBucket: "reactapp-c82d4.appspot.com",
  messagingSenderId: "25917828355",
  appId: "1:25917828355:web:ff4e0e0a8109f8014c8d36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db=getFirestore(app)