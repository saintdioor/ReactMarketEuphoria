import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAmJK6f7aGbZQXiGixnP_l3fPnjwEyMjoI",
    authDomain: "euphoriamarket-be2e5.firebaseapp.com",
    databaseURL: "https://euphoriamarket-be2e5-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "euphoriamarket-be2e5",
    storageBucket: "euphoriamarket-be2e5.appspot.com",
    messagingSenderId: "907916992826",
    appId: "1:907916992826:web:11876fe9ae905b9a4af003",
    measurementId: "G-XFMYGSKDYB"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase();
