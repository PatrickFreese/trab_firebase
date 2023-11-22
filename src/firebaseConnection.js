import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBP5ZC6YFLnG2E9BleZroXIsuGaojEDshg",
  authDomain: "appaula-f5319.firebaseapp.com",
  databaseURL: "https://appaula-f5319-default-rtdb.firebaseio.com",
  projectId: "appaula-f5319",
  storageBucket: "appaula-f5319.appspot.com",
  messagingSenderId: "667988921659",
  appId: "1:667988921659:web:e251b65d5d4d1075043b1e",
  measurementId: "G-6CCBW64FVK"
};


const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export { db, app };