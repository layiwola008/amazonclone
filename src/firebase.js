import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB6w7diGL4f3WVyybg4PyqFwGBtaNFdGCY",
  authDomain: "challenge-87efa.firebaseapp.com",
  projectId: "challenge-87efa",
  storageBucket: "challenge-87efa.appspot.com",
  messagingSenderId: "509047353289",
  appId: "1:509047353289:web:39f16386db977c95628218",
  measurementId: "G-MMMBH1PH0P"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const storage = getStorage(app);

export { db, auth, storage };

// import firebase from 'firebase';

// const firebaseConfig = {
//   apiKey: "AIzaSyApFQY0_MatcoEJvVjBBx6cZJNChU7vfcM",
//   authDomain: "challenge-d592b.firebaseapp.com",
//   projectId: "challenge-d592b",
//   storageBucket: "challenge-d592b.appspot.com",
//   messagingSenderId: "765260670053",
//   appId: "1:765260670053:web:8b3b5ad6f9f595f41e128c",
//   measurementId: "G-7P0Y5C16E5",
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export {db, auth};
