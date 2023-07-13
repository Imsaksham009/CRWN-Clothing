import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider
} from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyBjYMJsrDXzlAY31yPvfFvvdobPbZ69q-A",
    authDomain: "crwn-clothing-db-a3614.firebaseapp.com",
    projectId: "crwn-clothing-db-a3614",
    storageBucket: "crwn-clothing-db-a3614.appspot.com",
    messagingSenderId: "396640260522",
    appId: "1:396640260522:web:d06895efc06522f7011bd3"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const db = getFirestore(app);


export const googleSignInWithPopUp = () => {
    return signInWithPopup(auth, provider);
};


export const setUserFromAuth = async (authData) => {
    const docRef = doc(db, "Users", authData.uid);
    const userSnap = await getDoc(docRef);
    try {
        if (!userSnap.exists()) {
            await setDoc(docRef, {
                displayName: authData.displayName,
                email: authData.email,
                createdOn: Date().toString()
            });
        }
    } catch (e) {
        console.log(e);
    }

    return docRef;

}

