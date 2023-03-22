import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { getFirestore, collection, addDoc } from "firebase/firestore";


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

// export const createPerson = async () => {
//     try {
//         const docRef = await addDoc(collection(db, "persons"), {
//             first: "Saksham",
//             middle: "",
//             last: "Gupta",
//             born: 2000
//         });

//         console.log("Document written with ID: ", docRef.id);
//     } catch (e) {
//         console.error("Error adding document: ", e);
//     }
// };




export const signInWithGooglePopUp = () => signInWithPopup(auth, provider).then(async (result) => {
    try {
        const docRef = await addDoc(collection(db, "persons"), {
            first: "Saksham",
            middle: "",
            last: "Gupta",
            born: 2000
        });

        console.log("Document written with ID: ", docRef.id);
        console.log(result);
    } catch (e) {
        console.error("Error adding document: ", e);
    }

});


