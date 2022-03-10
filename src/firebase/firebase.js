import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

export const firebaseApp = initializeApp({
  // copy and paste your firebase credential here
  apiKey: "AIzaSyC-L227GCLt_eJiLJMN0F5JDau3UiJYeC8",
  authDomain: "peak-industry-solutions.firebaseapp.com",
  projectId: "peak-industry-solutions",
  storageBucket: "peak-industry-solutions.appspot.com",
  messagingSenderId: "145779266695",
  appId: "1:145779266695:web:702aa405c0646f7ad29422",
  measurementId: "G-1PWFM0RT0Q"
});

const db = getFirestore();

export { db };
