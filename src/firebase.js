import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAiuibPGdl5N_hgpTOa8s0jAvCLc9-ZeDU",
  authDomain: "bozy-plan-form.firebaseapp.com",
  databaseURL:
    "https://bozy-plan-form-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "bozy-plan-form",
  storageBucket: "bozy-plan-form.appspot.com",
  messagingSenderId: "146785175732",
  appId: "1:146785175732:web:0b9cb449ff499d411dafe1",
});

var db = firebaseApp.firestore();

export { db };
