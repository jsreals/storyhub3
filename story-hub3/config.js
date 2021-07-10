import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCCGN_oiYNuKjwXgcL3T74ZivilTTh7AT0",
  authDomain: "story-hub-12cf6.firebaseapp.com",
  databaseURL: "https://story-hub-12cf6.firebaseio.com",
  projectId: "story-hub-12cf6",
  storageBucket: "story-hub-12cf6.appspot.com",
  messagingSenderId: "596560767995",
  appId: "1:596560767995:web:a2a3c10e5e99e504aef95e"
};
 
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();