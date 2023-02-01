import firebase from "firebase/compat/app";
import "firebase/compat/database";

const config = {
  apiKey: "AIzaSyAEkGOpqC_lUHrluX_FF4DlNbaDulZAZww",
  authDomain: "chat-app-602f7.firebaseapp.com",
  databaseURL:
    "https://chat-app-602f7-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "chat-app-602f7",
  storageBucket: "chat-app-602f7.appspot.com",
  messagingSenderId: "65150990041",
  appId: "1:65150990041:web:3dca39578fab8cdc8bb0c8",
};

const db = firebase.initializeApp(config);
export default db;
