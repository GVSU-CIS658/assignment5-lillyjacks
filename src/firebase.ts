import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  //   // COPY this from your Firebase Console
  //   apiKey: "your-api-key-goes-here",
  //   authDomain: "your-project-name-here.firebaseapp.com",
  //   databaseURL: "https://your-project-name-here.firebaseio.com",
  //   projectId: "your-project-name-here",
  //   storageBucket: "your-project-name.appspot.com",
  //   messagingSenderId: "xxxxxxxx",

  apiKey: "AIzaSyCYn8aEWYLPjpKscryLnBKwEoOFGqZQjWk",

  authDomain: "assignment5-b94b8.firebaseapp.com",

  projectId: "assignment5-b94b8",

  storageBucket: "assignment5-b94b8.firebasestorage.app",

  messagingSenderId: "354028679895",

  // appId: "1:354028679895:web:bf7efe509f41d81e2b3692"

};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();