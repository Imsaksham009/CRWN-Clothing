import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAhVOXc5FiOZ6scvr-WiM7LV-eqUOp7BYg",
    authDomain: "crwn-clothing-cc3da.firebaseapp.com",
    projectId: "crwn-clothing-cc3da",
    storageBucket: "crwn-clothing-cc3da.appspot.com",
    messagingSenderId: "716278500911",
    appId: "1:716278500911:web:b319333c1aa4d56df900da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

//firestore db
const db = getFirestore(app);



export const signInWithGooglePopUp = () => signInWithPopup(auth, provider).then(async (result) => {

    const docRefFromAuth = doc(db, "users", result.user.uid);
    const docSnap = await getDoc(docRefFromAuth);
    if (docSnap.exists()) {
        console.log(docSnap.data());
    } else {
        await setDoc(docRefFromAuth, {
            name: result.user.displayName,
            email: result.user.email,
            isVerified: result.user.emailVerified
        });
    }
});


