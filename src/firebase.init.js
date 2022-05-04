// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMKbVTwV0wu5nFbH4KXj6fQmlNfhymL9k",
  authDomain: "inventory-management-5d2da.firebaseapp.com",
  projectId: "inventory-management-5d2da",
  storageBucket: "inventory-management-5d2da.appspot.com",
  messagingSenderId: "1004531698115",
  appId: "1:1004531698115:web:40e0902b1be6bd4ab85576",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
