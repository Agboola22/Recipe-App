import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBwMrYsCAMSG_zDN1lKrMYp2BFeoYhrR1Q",
    authDomain: "recipe-ninja-8eb09.firebaseapp.com",
    projectId: "recipe-ninja-8eb09",
    storageBucket: "recipe-ninja-8eb09.firebasestorage.app",
    messagingSenderId: "675993005576",
    appId: "1:675993005576:web:c1898f10640a7d08c2ebbd"
};

firebase.initializeApp(firebaseConfig)
const projectFirestore = firebase.firestore()

export { projectFirestore }