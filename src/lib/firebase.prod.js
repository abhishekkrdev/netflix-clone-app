import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';

// We need to somehow seed the database

// We need a config here
const config = {
  apiKey: 'AIzaSyAnFqyG8eo6SEiam7zS2tl5G_8jrvECI8I',
  authDomain: 'netflix-clone-2c12c.firebaseapp.com',
  projectId: 'netflix-clone-2c12c',
  storageBucket: 'netflix-clone-2c12c.appspot.com',
  messagingSenderId: '1021521971354',
  appId: '1:1021521971354:web:97d61c8d547250879b7723'
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
