import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  {// Enter YOUR API KEYS HERE}
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
// export default {db,auth,storage};
