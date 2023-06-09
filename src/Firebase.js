import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey : process.env.REACT_APP_API_KEY,
  authDomain : process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
  // apiKey: "AIzaSyC7OwOdnFuF6fcCGqEQ5vvuZnZdSwBPm00",
  // authDomain: "themoive-8e5cc.firebaseapp.com",
  // projectId: "themoive-8e5cc",
  // storageBucket: "themoive-8e5cc.appspot.com",
  // messagingSenderId: "480716419116",
  // appId: "1:480716419116:web:138db665b5534fe845e189",
  // measurementId: "G-WE9ECB3B15"
}

const firebase = initializeApp(firebaseConfig);
const fireStore = getFirestore(firebase);

export { fireStore };