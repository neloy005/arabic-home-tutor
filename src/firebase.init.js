// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBS5qqzne6vnhqcNkuApZrthrU-jpobZpg",
    authDomain: "arabic-home-tutor.firebaseapp.com",
    projectId: "arabic-home-tutor",
    storageBucket: "arabic-home-tutor.appspot.com",
    messagingSenderId: "1099470949849",
    appId: "1:1099470949849:web:9e52763fbee16b6c711dc8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;