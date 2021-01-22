import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
   apiKey: "AIzaSyCGLlWVm8Uufdkt-1PaSjQt6IWjfkiYRRs",
   authDomain: "react-apps-cursos-4b4aa.firebaseapp.com",
   projectId: "react-apps-cursos-4b4aa",
   storageBucket: "react-apps-cursos-4b4aa.appspot.com",
   messagingSenderId: "740087695719",
   appId: "1:740087695719:web:ff0c5d55ac63cccb3887c2"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 const db = firebase.firestore;

 const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

 export{
    db,
    googleAuthProvider,
    firebase
 }