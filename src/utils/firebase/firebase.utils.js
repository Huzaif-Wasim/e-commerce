import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";


const firebaseConfig = {
    apiKey: "AIzaSyCO195vaepQD86FUfb6TDpx-tNOVmpu6cQ",
    authDomain: "crwn-clothing-b4ef2.firebaseapp.com",
    projectId: "crwn-clothing-b4ef2",
    storageBucket: "crwn-clothing-b4ef2.appspot.com",
    messagingSenderId: "553874867743",
    appId: "1:553874867743:web:4459ae20ed2480b66b772a",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

const db = getFirestore();

export const createUserFromAuth = async (user) => {
    console.log("user parmeter", user);
    const userDocRef = doc(db, "users", user.uid);
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = user;
        const createdAt = new Date();
        try {
            setDoc(userDocRef, {
                displayName,
                email,
                createdAt,

            });
        } catch (Error) {
            console.log("Error creating new user!");
        }
    }

    console.log(userSnapshot);

    return userDocRef;
}

export const createNewUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password)
        return;
    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password)
        return;
    return await signInWithEmailAndPassword(auth, email, password);
}

export const signUserOut = async () => {
    const res = await signOut(auth);
    console.log("Inside signUserOut", res);

}

export const authStateListener = async (callback) => {
    return await onAuthStateChanged(auth, callback);
}
