import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqCuYmApM275Pejx2a-XykzPUJ6-kKXSo",
  authDomain: "blog-app-18b32.firebaseapp.com",
  projectId: "blog-app-18b32",
  storageBucket: "blog-app-18b32.appspot.com",
  messagingSenderId: "633894065618",
  appId: "1:633894065618:web:4d23d70824eb0a176ae40b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
