// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from   'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2nV9xD-Thgeh0rA1tPaSzpASAxCSTO4M",
  authDomain: "react-http-ca17a.firebaseapp.com",
  databaseURL: "https://react-http-ca17a-default-rtdb.firebaseio.com",
  projectId: "react-http-ca17a",
  storageBucket: "react-http-ca17a.appspot.com",
  messagingSenderId: "1084435179059",
  appId: "1:1084435179059:web:b8597b70050cfb55792546"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app); 
export const database = getAuth(app)
