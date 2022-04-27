import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB8EeiG-vmHU-rImm4cRGx2PH9kzUHrgwk",
    authDomain: "linkedin-clone-308e7.firebaseapp.com",
    projectId: "linkedin-clone-308e7",
    storageBucket: "linkedin-clone-308e7.appspot.com",
    messagingSenderId: "596145712111",
    appId: "1:596145712111:web:31d5cdf8ad26313d21641a",
    measurementId: "G-E453GL7CK9"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };