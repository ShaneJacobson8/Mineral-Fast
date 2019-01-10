import firebase from 'firebase'
  const config = {
    apiKey: "AIzaSyBdefWqhi1LgOjGRbhkR9r8OlK6wc8QyJU",
    authDomain: "mineral-fast.firebaseapp.com",
    databaseURL: "https://mineral-fast.firebaseio.com",
    projectId: "mineral-fast",
    storageBucket: "mineral-fast.appspot.com",
    messagingSenderId: "323378902808"
  };
  firebase.initializeApp(config);
  export const provider = new firebase.auth.GoogleAuthProvider();
  export const auth = firebase.auth();
  export default firebase;
