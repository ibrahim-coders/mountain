// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBYP4n0d963IiwDYg2BdexA2pcZFvmDEtU',
  authDomain: 'mountain-fbb29.firebaseapp.com',
  projectId: 'mountain-fbb29',
  storageBucket: 'mountain-fbb29.firebasestorage.app',
  messagingSenderId: '486590501704',
  appId: '1:486590501704:web:40c0338d16cb3779cc997d',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
