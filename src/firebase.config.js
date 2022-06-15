import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBcgCos8T-Wa0mwVg0uQZ-bNRNP7nGN-tA",
  authDomain: "restaurant-8e950.firebaseapp.com",
  databaseURL: "https://restaurant-8e950-default-rtdb.firebaseio.com",
  projectId: "restaurant-8e950",
  storageBucket: "restaurant-8e950.appspot.com",
  messagingSenderId: "1036115623079",
  appId: "1:1036115623079:web:e5a75d06b375ce66eb2f82",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
