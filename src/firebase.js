import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyA4oFKelU7SdeTyEd0aKWP1ODFwe8tRdsk",
  authDomain: "reactjs02.firebaseapp.com",
  databaseURL: "https://reactjs02.firebaseio.com",
  projectId: "reactjs02",
  storageBucket: "reactjs02.appspot.com",
  messagingSenderId: "383492416571",
  appId: "1:383492416571:web:a4fd8e3847c56645"
};

firebase.initializeApp(firebaseConfig);

export default firebase;