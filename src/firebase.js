import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

import dotenv from "dotenv";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

dotenv.config();

const firebaseConfig = {
  apiKey: "AIzaSyCMgA60gYKgPUF6AjD26i3tJtcc48tst08",
  authDomain: "vbts-production.firebaseapp.com",
  databaseURL: "https://vbts-production-default-rtdb.firebaseio.com",
  projectId: "vbts-production",
  storageBucket: "vbts-production.appspot.com",
  messagingSenderId: "896873230776",
  appId: "1:896873230776:web:bb63660ea1f529c8535f4d",
  measurementId: "G-MZ7R3L3M04",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(); //for google signin
export const storage = getStorage(app);
export const database = getDatabase(app);

export const DATABASE_REFERENCE = "/vbts/list-tool/student";
