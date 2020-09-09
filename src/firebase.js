import firebase from "firebase";
 
const firebaseApp=firebase.initializeApp(
{
    apiKey: "AIzaSyBo_YEEuSUOsH9LsEYhssrSNW49hERPqBs",
    authDomain: "instagram-clo-4d50b.firebaseapp.com",
    databaseURL: "https://instagram-clo-4d50b.firebaseio.com",
    projectId: "instagram-clo-4d50b",
    storageBucket: "instagram-clo-4d50b.appspot.com",
    messagingSenderId: "111978131106",
    appId: "1:111978131106:web:48ecd72ec9cd83a00771fb",
    measurementId: "G-BLPPZP3HYE"
    
    
  });

  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const storage=firebase.storage();
  
export {db,auth,storage};
// export default {db,auth,storage};