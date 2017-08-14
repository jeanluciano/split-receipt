import * as firebase from 'firebase';
import {
  AppRegistry,
} from 'react-native';
import App from './app/index';

if (process.env.NODE_ENV === 'development') require('./secrets');
// Initialize Firebase
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGE_SENDER_ID,
};
firebase.initializeApp(firebaseConfig);

AppRegistry.registerComponent('splitreceipt', () => App);
