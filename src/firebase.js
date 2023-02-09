import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCxCykP6N8srg_GoXz704xT03QIyunhXH8",
  authDomain: "veterinary-clinic-db.firebaseapp.com",
  projectId: "veterinary-clinic-db",
  storageBucket: "veterinary-clinic-db.appspot.com",
  messagingSenderId: "164921020699",
  appId: "1:164921020699:web:da5e44f6b8859a5516c3be",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
