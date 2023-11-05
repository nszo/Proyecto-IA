// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLhp_PzB3e9Sy1U8_X5knNAqCcavy4Zl4",
  authDomain: "innotech-88215.firebaseapp.com",
  projectId: "innotech-88215",
  storageBucket: "innotech-88215.appspot.com",
  messagingSenderId: "1071171355513",
  appId: "1:1071171355513:web:efb7835a5506b8ea6ae5a8",
  measurementId: "G-TPMJ67R42G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

var admin = require("firebase-admin");

// La ruta debe apuntar al archivo JSON que descargaste
var serviceAccount = require("./path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
