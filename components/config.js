import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCS1mKiB-Me_hnrr3t34RDUOIRCNmNruXE",
  authDomain: "q-project-f0a58.firebaseapp.com",
  projectId: "q-project-f0a58",
  storageBucket: "q-project-f0a58.appspot.com",
  messagingSenderId: "422077449765",
  appId: "1:422077449765:web:2380dd5fbb160d85a861cc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
