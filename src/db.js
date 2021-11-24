//import firebase from "firebase";
//import "firebase/firestore";
import firebase from 'firebase/compat/app'; //v9
import 'firebase/compat/database'
var config = {
    apiKey: "...",
    authDomain: "...",
    databaseURL: "...",
    projectId: "...",
    storageBucket: "...",
    messagingSenderId:"...",
    appId: "..."
};
var fire = firebase.initializeApp(config);
//const database = firebase.database();
export default fire;
