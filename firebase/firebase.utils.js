import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
 
    apiKey: "AIzaSyDvhjELQzZrarbRrg2L5gBJBfOQ2O1DJDo",
    authDomain: "e-commerce-db-33a10.firebaseapp.com",
    databaseURL: "https://e-commerce-db-33a10.firebaseio.com",
    projectId: "e-commerce-db-33a10",
    storageBucket: "e-commerce-db-33a10.appspot.com",
    messagingSenderId: "27077137215",
    appId: "1:27077137215:web:4fae09f306ddb08d02398a",
    measurementId: "G-185P0YJH49"
  };

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default !firebase.apps.length
  ? firebase.initializeApp(config).firestore()
  : firebase.app().firestore();

