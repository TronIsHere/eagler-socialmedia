import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAtjHuNiTAC8XCYh64fn3uLUsrTl_P_A0o",
  authDomain: "eagler-1d697.firebaseapp.com",
  projectId: "eagler-1d697",
  storageBucket: "eagler-1d697.appspot.com",
  messagingSenderId: "252325885239",
  appId: "1:252325885239:web:a76004429c559043d396b2",
  measurementId: "G-B1YLQV7FH0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
