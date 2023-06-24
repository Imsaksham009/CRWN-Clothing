import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBjYMJsrDXzlAY31yPvfFvvdobPbZ69q-A",
    authDomain: "crwn-clothing-db-a3614.firebaseapp.com",
    projectId: "crwn-clothing-db-a3614",
    storageBucket: "crwn-clothing-db-a3614.appspot.com",
    messagingSenderId: "396640260522",
    appId: "1:396640260522:web:d06895efc06522f7011bd3"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
