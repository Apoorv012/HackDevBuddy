// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseAPIKey = import.meta.env.FIREBASE_APIKEY;

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDHV9KPc0CDhg7lRvkUDfCRkfcyL5Z3l3w",
    // apiKey: { firebaseAPIKey },
    authDomain: "devproctor-6ea5b.firebaseapp.com",
    projectId: "devproctor-6ea5b",
    storageBucket: "devproctor-6ea5b.appspot.com",
    messagingSenderId: "981005066675",
    appId: "1:981005066675:web:a2a55c9f1fa986f5146bc6",
    measurementId: "G-D2RHDR78EJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;