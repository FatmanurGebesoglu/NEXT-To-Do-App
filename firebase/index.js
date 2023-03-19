import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyC89Hdt1UvXG7PoCM2mbRdwz5F_fGFcLVE",
    authDomain: "libraryapp-9d522.firebaseapp.com",
    projectId: "libraryapp-9d522",
    storageBucket: "libraryapp-9d522.appspot.com",
    messagingSenderId: "906262558332",
    appId: "1:906262558332:web:2d4d526d66e0280c1afbf9",
    measurementId: "G-M0LPDKL8E5"
  };


initializeApp(firebaseConfig);
const db=getFirestore();
export{db};



