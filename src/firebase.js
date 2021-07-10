import firebase from 'firebase'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAqnMtxbQqrI4vjxzSY7quDSR5jTu5qpk",
  authDomain: "whatsapp-clone-eac34.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-eac34.firebaseio.com",
  projectId: "whatsapp-clone-eac34",
  storageBucket: "whatsapp-clone-eac34.appspot.com",
  messagingSenderId: "15315438381",
  appId: "1:15315438381:web:8ab0b5fc95ff9b691fe1a4",
  measurementId: "G-ZYSY5CH3Q2"
};





  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  

  export default db;