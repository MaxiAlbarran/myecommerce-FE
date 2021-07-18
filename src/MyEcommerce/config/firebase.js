import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyAFv1AfDo8vw1wUHKBEIJaLW7CPuP29bZM',
  authDomain: 'maxi-albarran-app.firebaseapp.com',
  projectId: 'maxi-albarran-app',
  storageBucket: 'maxi-albarran-app.appspot.com',
  messagingSenderId: '541458561358',
  appId: '1:541458561358:web:ec00bbba51c3ccf352861f',
  measurementId: 'G-TNHX0PRS8Q',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.db = firebase.firestore();
firebase.registro = firebase.auth();
firebase.storage = firebase.storage();

export default firebase;
