import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAdJBGJI9G54k9L3DY8O4kcPI1KKiCDpmY",
  authDomain: "cooking-ninja-site-8eacc.firebaseapp.com",
  projectId: "cooking-ninja-site-8eacc",
  storageBucket: "cooking-ninja-site-8eacc.appspot.com",
  messagingSenderId: "728632958440",
  appId: "1:728632958440:web:46e1f761b5e9e9cc0e585d"
};

// Initialize firebase
firebase.initializeApp(firebaseConfig)

// Initialize services
const projectFirestore = firebase.firestore()

export {projectFirestore}