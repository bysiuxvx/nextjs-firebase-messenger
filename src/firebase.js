import firebase from "firebase/compat/app"
import "firebase/compat/auth"

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyB8x6y67XDITBo7YXKALUSRoNCVIDOR65E",
    authDomain: "nextjs-messaging-b73c6.firebaseapp.com",
    projectId: "nextjs-messaging-b73c6",
    storageBucket: "nextjs-messaging-b73c6.appspot.com",
    messagingSenderId: "868591803236",
    appId: "1:868591803236:web:93aa9ca7211029934d7871",
    measurementId: "G-TD4R3WKLHH",
  })
  .auth()
