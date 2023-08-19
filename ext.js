// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-rjka3MhE9fsuxh8lr0AmWxexImhAeUY",
  authDomain: "authfusion-50185.firebaseapp.com",
  projectId: "authfusion-50185",
  storageBucket: "authfusion-50185.appspot.com",
  messagingSenderId: "417706968723",
  appId: "1:417706968723:web:9c3857b628d94a8bb16f66",
  measurementId: "G-48TQZRS4CV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
