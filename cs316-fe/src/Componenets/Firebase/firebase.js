//TODO: Explore environment variables

import app from "firebase/app";
import "firebase/auth";
import "firebase/storage";

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
    //if (!firebase.apps.length) {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
    this.storageRef = app.storage().ref();
  }

  // *** Auth API ***
  register = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  login = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  logout = () => this.auth.signOut();

  resetPassword = (email) => this.auth.sendPasswordResetEmail(email);

  updatePassword = (password) => this.auth.currentUser.updatePassword(password);

  // *** Upload API ***

  uploadPic = (file) => {
    console.log("new File: ", file);
    var imageRef = this.storageRef.child(`images/${file.name}`);
    imageRef.put(file).then(function (snapshot) {
      console.log("Uploaded a blob or file!");
      imageRef.getDownloadURL().then(function (downloadURL) {
        console.log("File available at", downloadURL);
      });
    });
    //TODO: send to postgres
  };

  // *** Grab URLs API ***
  renderExplore = async (imgName) => {
    if (imgName === "test") {
      var imageRef = this.storageRef.child(`images/${imgName}.mov`);
    } else {
      var imageRef = this.storageRef.child(`images/${imgName}.JPG`);
    }
    let imgPromise = await imageRef.getDownloadURL();
    //console.log(imgPromise);
    return imgPromise;
  };
}

export default new Firebase();
