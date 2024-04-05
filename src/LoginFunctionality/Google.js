import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAHL6h-d7558VNZ_3D-_UClhJhgKZEDzGQ",
    authDomain: "glamwear-268da.firebaseapp.com",
    projectId: "glamwear-268da",
    storageBucket: "glamwear-268da.appspot.com",
    messagingSenderId: "483014334086",
    appId: "1:483014334086:web:8e680b2236f027ed7a6307",
    measurementId: "G-Z2WXDSGWKS"
  };

  firebase.initializeApp(firebaseConfig);

  var auth = firebase.auth();
  var provider = new firebase.auth.GoogleAuthProvider();
  export {auth, provider}