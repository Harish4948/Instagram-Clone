import firebase from "firebase";
 
const firebaseApp=firebase.initializeApp(
{
    apiKey: "AIzaSyDo7gz3tB3rVEBgEN8Rgb0jLTyXOCFSEPM",
    authDomain: "instagram-clone-c8d00.firebaseapp.com",
    databaseURL: "https://instagram-clone-c8d00.firebaseio.com",
    projectId: "instagram-clone-c8d00",
    storageBucket: "instagram-clone-c8d00.appspot.com",
    messagingSenderId: "453539113541",
    appId: "1:453539113541:web:2a1a7ac7d178320987512c",
    measurementId: "G-5GVHPW0Y56"
  
  });

  const db=firebaseApp.firestore();
  export default db;