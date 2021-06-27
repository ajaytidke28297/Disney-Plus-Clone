import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCywDpklxPibhD-3MPLeWnzcMELnEt9r2o",
  authDomain: "disney-plus-clone-1328-c76f7.firebaseapp.com",
  projectId: "disney-plus-clone-1328-c76f7",
  storageBucket: "disney-plus-clone-1328-c76f7.appspot.com",
  messagingSenderId: "978822132164",
  appId: "1:978822132164:web:ca09421e1ee293399e3491",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };

export default db;
