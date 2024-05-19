import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCxXC-q4XcB2R9R4e4LeJ6ELKI6ce9MbZY",
    authDomain: "aute-e0a28.firebaseapp.com",
    projectId: "aute-e0a28",
    storageBucket: "aute-e0a28.appspot.com",
    messagingSenderId: "662111124014",
    appId: "1:662111124014:web:ec2a60356b652b6f20bdbf",
    measurementId: "G-J48ES73300"
  };

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;