import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCa8dJCGVkztjwXq20-e__PJI-Rpn3tQFg",
    authDomain: "wri-messageroom.firebaseapp.com",
    projectId: "wri-messageroom",
    storageBucket: "wri-messageroom.appspot.com",
    messagingSenderId: "482612442264",
    appId: "1:482612442264:web:b3f54c454589a5e049cced"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db; 