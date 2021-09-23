import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDLcKmsSGHPhPE6b25C_odeihp53VjOYsI",
  authDomain: "agenda-crud-3caa5.firebaseapp.com",
  databaseURL: "https://agenda-crud-3caa5-default-rtdb.firebaseio.com",
  projectId: "agenda-crud-3caa5",
  storageBucket: "agenda-crud-3caa5.appspot.com",
  messagingSenderId: "729543262298",
  appId: "1:729543262298:web:a98290704f8c3863f85863",
};

firebase.initializeApp(firebaseConfig);
const databaseRef = firebase.database().ref();
export const agendacrudRef = databaseRef.child("agenda-crud");
export default firebase;
