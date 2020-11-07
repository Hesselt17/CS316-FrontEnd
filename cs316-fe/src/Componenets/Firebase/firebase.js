//TODO: Explore environment variables

import app from "firebase/app";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAG34QPgSOuoTZtY5cteHsbK_Y19gqQlcg",
  authDomain: "designduke-94c81.firebaseapp.com",
  databaseURL: "https://designduke-94c81.firebaseio.com",
  projectId: "designduke-94c81",
  storageBucket: "designduke-94c81.appspot.com",
  messagingSenderId: "656701962965",
  appId: "1:656701962965:web:dfaa2d6bb9df9c2738005c",
  measurementId: "G-BJPB726RP6",
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
  }
  // *** Auth API ***

  register = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  login = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  logout = () => this.auth.signOut();

  resetPassword = (email) => this.auth.sendPasswordResetEmail(email);

  updatePassword = (password) => this.auth.currentUser.updatePassword(password);
}

export default new Firebase();
