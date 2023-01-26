// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA17uiXtWVf-QWeVa3I8vGFlQrF5OiNBpk",
  authDomain: "appointmate-8a6ae.firebaseapp.com",
  projectId: "appointmate-8a6ae",
  storageBucket: "appointmate-8a6ae.appspot.com",
  messagingSenderId: "783839979090",
  appId: "1:783839979090:web:80422f51acefde5673218b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
