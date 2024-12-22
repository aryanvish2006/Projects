import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyATpAYNppMtVSxsUDR_dUSG_c_wXc_2Czk",
  authDomain: "studentdb2006.firebaseapp.com",
  databaseURL: "https://studentdb2006-default-rtdb.firebaseio.com",
  projectId: "studentdb2006",
  storageBucket: "studentdb2006.firebasestorage.app",
  messagingSenderId: "365270260368",
  appId: "1:365270260368:web:f419aef6354627992d5615",
  measurementId: "G-R51WRHJPED"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
