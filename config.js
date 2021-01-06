import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyA5_uPlnOAT3IIpeXw5Yu0Vc_LAQzec8RA",
  authDomain: "book-santa-5716b.firebaseapp.com",
  databaseURL: "https://book-santa-5716b.firebaseio.com",
  projectId: "book-santa-5716b",
  storageBucket: "book-santa-5716b.appspot.com",
  messagingSenderId: "308900582812",
  appId: "1:308900582812:web:3d82686e46ca408d1aa459"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
