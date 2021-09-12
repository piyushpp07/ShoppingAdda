import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import config from './config'

firebase.initializeApp(config)
const auth = firebase.auth()
const database = firebase.firestore()
export { auth, database }