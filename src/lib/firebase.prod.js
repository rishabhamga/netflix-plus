import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//i 1) when seeding the database you'll have to uncomment this!
 // import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyDX2osT8d-L8MWcylGdBtl87iAxrN1uXxA",
  authDomain: "netflixplus-57acd.firebaseapp.com",
  projectId: "netflixplus-57acd",
  storageBucket: "netflixplus-57acd.appspot.com",
  messagingSenderId: "1063583538817",
  appId: "1:1063583538817:web:b58c9f1cff94236ea8f780",
  measurementId: "G-QSWGKNFGYL"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
