// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'
import { getAnalytics } from "firebase/analytics";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtgehxeiKgf89143Rv4rSydrm80R4ie7U",
  authDomain: "catalogo-24de1.firebaseapp.com",
  projectId: "catalogo-24de1",
  storageBucket: "catalogo-24de1.appspot.com",
  messagingSenderId: "664752899160",
  appId: "1:664752899160:web:9074d267043e514c93f62d",
  measurementId: "G-KN9K3DB1JQ"
};
const FIREBASE_APP = initializeApp(firebaseConfig);
// Initialize Firebase Auth with persistence
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);



//const analytics = getAnalytics(app);