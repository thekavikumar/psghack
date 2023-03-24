// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2do5TB5JD3UZPEAnhw4yScVuxWuMGulY",
  authDomain: "psghack-43fbd.firebaseapp.com",
  projectId: "psghack-43fbd",
  storageBucket: "psghack-43fbd.appspot.com",
  messagingSenderId: "589208596776",
  appId: "1:589208596776:web:174e8a701bb948b272201d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
