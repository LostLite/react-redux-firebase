import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDpWAdcjgX9kmm0wg9lh4IkpAkfXtrU2Qo",
    authDomain: "mario-plan-a9d5a.firebaseapp.com",
    databaseURL: "https://mario-plan-a9d5a.firebaseio.com",
    projectId: "mario-plan-a9d5a",
    storageBucket: "mario-plan-a9d5a.appspot.com",
    messagingSenderId: "689447684379"
  };

  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;