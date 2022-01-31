// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, inMemoryPersistence, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_ID,
  appId: process.env.REACT_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authService = getAuth();
export const db = getFirestore();
export const storage = getStorage();

// Initialize Admin App
const adminApp = initializeApp(firebaseConfig, 'fbase-admin');
const adminAuth = getAuth(adminApp);

export const addModerator = (data) => {
  setPersistence(adminAuth, inMemoryPersistence)
  .then(() => {
    return createUserWithEmailAndPassword(adminAuth, data.email, data.password);
  })
  .catch((error) => {
    console.log(error.code, error.message);
  })
}