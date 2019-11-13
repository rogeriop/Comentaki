import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBDD5cjQgQzCHaegvu2zfSH7CBhisSlmVE",
    authDomain: "comentaki-rogeriop.firebaseapp.com",
    databaseURL: "https://comentaki-rogeriop.firebaseio.com",
    projectId: "comentaki-rogeriop",
    storageBucket: "comentaki-rogeriop.appspot.com",
    messagingSenderId: "898728427479",
    appId: "1:898728427479:web:08da77a108c37861cb1592"
  };
  firebase.initializeApp(firebaseConfig)

  export default firebase