import firebase from "firebase"
import 'firebase/auth'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAG-Jq4kmaMlDfsf3TP7ym2hD0YRHks9j0",
  authDomain: "timespent-2d27a.firebaseapp.com",
  databaseURL: "https://timespent-2d27a.firebaseio.com",
  projectId: "timespent-2d27a",
  storageBucket: "timespent-2d27a.appspot.com",
  messagingSenderId: "326527362352",
  appId: "1:326527362352:web:911a141535b2671a6d94f5"
})

const db = firebaseApp.firestore()
const firebaseAppAuth = firebaseApp.auth()

export { db, firebaseAppAuth };
