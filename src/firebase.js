
import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyCpA25IqcNgR4pKnzlKz3eX3U8FR3czbH8",
    authDomain: "reactchatapp-f8a93.firebaseapp.com",
    databaseURL: "https://reactchatapp-f8a93.firebaseio.com",
    projectId: "reactchatapp-f8a93",
    storageBucket: "reactchatapp-f8a93.appspot.com",
    messagingSenderId: "351944867754",
    appId: "1:351944867754:web:83d303e42478a6fc54b5d3",
    measurementId: "G-931PJBQZWB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;