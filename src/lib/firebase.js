// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJmdyoKXYMuH-37Gq30cKN21DjwtBRm9s",
  authDomain: "farm-bridge-6d4e9.firebaseapp.com",
  projectId: "farm-bridge-6d4e9",
  storageBucket: "farm-bridge-6d4e9.firebasestorage.app",
  messagingSenderId: "1036358919257",
  appId: "1:1036358919257:web:a72bf9aaf8b89708933d48",
  measurementId: "G-PPW5M18R9Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Auth and Firestore services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const setUpRecaptcha = (phoneNumber) => {
  const recaptchaVerifier = new RecaptchaVerifier(
    'recaptcha-container',
    {
      size: 'invisible',
      callback: (response) => {
        console.log('reCAPTCHA expired');
      },
    },
    auth
  );

  recaptchaVerifier.render().then(widgetId => {
    window.recaptchaWidgetId = widgetId;
  });
  
  return signInWithPhoneNumber(auth, phoneNumber, window.recaptchaVerifier);
};
export default app;