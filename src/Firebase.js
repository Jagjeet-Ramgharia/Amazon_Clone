import firebase from 'firebase';



const firebaseConfig = {
    apiKey: "AIzaSyDhzzFAVoJSnB7UrKNJ_sQxH5gWZbQOrv4",
    authDomain: "clone-79817.firebaseapp.com",
    projectId: "clone-79817",
    storageBucket: "clone-79817.appspot.com",
    messagingSenderId: "562488343839",
    appId: "1:562488343839:web:5c6b2bca89189e2b2f442a",
    measurementId: "G-ED3SVVE3BZ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const auth = firebase.auth();

  export {db, auth};