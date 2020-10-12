import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';

// We need to somehow seed the database

// We need a config here
const config = {
  apiKey: 'AIzaSyAzNOQIc9eZ9pTqVyAvgUKUCpcDr7rvfMM',
  authDomain: 'netflix-e9567.firebaseapp.com',
  databaseURL: 'https://netflix-e9567.firebaseio.com',
  projectId: 'netflix-e9567',
  storageBucket: 'netflix-e9567.appspot.com',
  messagingSenderId: '765731289320',
  appId: '1:765731289320:web:dc36b5c91830ba9ff4b15d'
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
