import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyARx-eTY1egNc7bqskEd3FY3vl9psMwjbQ",
  authDomain: "blood-unity-bf5e3.firebaseapp.com",
  projectId: "blood-unity-bf5e3",
  storageBucket: "blood-unity-bf5e3.appspot.com",
  messagingSenderId: "967081978677",
  appId: "1:967081978677:web:c627e86d44e35d6d38ba7c",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
