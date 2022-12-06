import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDzuiYcyZ9UjilE_d6eS4g0nFGoIRHv9GU",
  authDomain: "react-ecommerce-176.firebaseapp.com",
  projectId: "react-ecommerce-176",
  storageBucket: "react-ecommerce-176.appspot.com",
  messagingSenderId: "118755081287",
  appId: "1:118755081287:web:20a38268d7aa1e1f8b8562",
  measurementId: "G-JC563DXTC8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
