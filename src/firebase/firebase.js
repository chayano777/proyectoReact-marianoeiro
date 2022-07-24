import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCcIjyVSzeqRaD-qq-1JLnuzMvdT6ce_Fk",
  authDomain: "reactproject-b8b12.firebaseapp.com",
  projectId: "reactproject-b8b12",
  storageBucket: "reactproject-b8b12.appspot.com",
  messagingSenderId: "138261338724",
  appId: "1:138261338724:web:7ed4043c5653202bc6dd71"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);