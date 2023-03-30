import { initializeApp } from "firebase/app";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup, createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from "firebase/auth";

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from "firebase/firestore";


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

const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);

//firestore db
const db = getFirestore(app);

export const signInWithGooglePopUp = () => signInWithPopup(auth, googleProvider);

export const signUpWithEmail = async (email, password, displayName) => {
    if (!email || !password) return;

    const userAuth = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, { displayName });

    return userAuth;
};

export const signInWithEmail = async (email, password) => {
    if (!email || !password) return;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (e) {
        return `Error Code=${e.code}, Error Message=${e.message}`;
    }
};


export const createUser = async (user) => {
    const docRefFromAuth = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRefFromAuth);
    if (docSnap.exists()) {
        return docRefFromAuth;
    } else {
        const { displayName, email } = user;
        const createdAt = new Date();
        await setDoc(docRefFromAuth, {
            displayName,
            email,
            createdAt
        });
    }
    return docRefFromAuth;
};


export const signOutUser = async () => await signOut(auth);