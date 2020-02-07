import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA_R2oCLvVTyPb3cpg_KosUNNVAvYDdFc0",
  authDomain: "crwn-clothing-d08bd.firebaseapp.com",
  databaseURL: "https://crwn-clothing-d08bd.firebaseio.com",
  projectId: "crwn-clothing-d08bd",
  storageBucket: "crwn-clothing-d08bd.appspot.com",
  messagingSenderId: "120789144695",
  appId: "1:120789144695:web:540f8fd28c02d5a84b2272",
  measurementId: "G-E3LV9D0JBR"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
