import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA8ZyGanaVhpwetgziwndvfRS_4fsvD0Xc",
  authDomain: "venura-portfolio-dfe55.firebaseapp.com",
  projectId: "venura-portfolio-dfe55",
  storageBucket: "venura-portfolio-dfe55.appspot.com",
  messagingSenderId: "740506012935",
  appId: "1:740506012935:web:199a0d3743c87c174b49a2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
