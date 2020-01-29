import firebase from 'firebase'
import firestore from 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyCLNg_iX5DqLAQHXW4kLC8tU2-gVOvNiTg",
    authDomain: "chat-wa7gh.firebaseapp.com",
    databaseURL: "https://chat-wa7gh.firebaseio.com",
    projectId: "chat-wa7gh",
    storageBucket: "chat-wa7gh.appspot.com",
    messagingSenderId: "158992337835",
    appId: "1:158992337835:web:745d002942f9ea161ca0ee",
    measurementId: "G-JQ4PEVNL6Q"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebaseApp.firestore().settings({ timestampsInSnapshots: true })
  firebase.analytics();

  export default firebaseApp.firestore()