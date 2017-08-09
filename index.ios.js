import * as firebase from 'firebase';
import { AppRegistry } from 'react-native';
import App from './app/index';


// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);

AppRegistry.registerComponent('splitreceipt', () => App);