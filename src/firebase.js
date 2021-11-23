import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB1L6p1HT2I7Mwnkl4URAN939BITB_s1tY",
  authDomain: "drive-18303.firebaseapp.com",
  projectId: "drive-18303",
  storageBucket: "drive-18303.appspot.com",
  messagingSenderId: "922418562966",
  appId: "1:922418562966:web:4252ff243fde6d40dfbfb7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const storage = firebaseApp.storage();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, storage, auth, provider };
