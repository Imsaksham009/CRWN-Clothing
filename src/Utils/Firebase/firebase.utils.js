import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    updateCurrentUser,
    updateProfile,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
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

export const signUpUsingEmail = async (email, password, displayName) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const currentUser = auth.currentUser;
        updateProfile(currentUser, { displayName });
        return res;
    } catch (e) {
        if (e.code === "auth/email-already-in-use") {
            alert("Email already in use with other profile.");
            return null;
        }
    }
};

export const signInUsingEmail = async (email, password) => {
    const res = await signInWithEmailAndPassword(auth, email, password);
    return res;
};


export const setUserFromAuth = async (authData, otherData) => {
    const docRef = doc(db, "Users", authData.uid);
    const userSnap = await getDoc(docRef);
    if (!authData.displayName) {
        authData.displayName = otherData.displayName;
    }
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
};

export const SignOutUser = async () => {
    await signOut(auth);
};

export const onAuthStateChangeListener = (cb) => onAuthStateChanged(auth, cb);