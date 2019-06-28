import firebase from 'firebase/app'
import 'firebase/auth'

// The configuration below is not sensitive data. You can serenely add your config here
const config = {
  apiKey: 'AIzaSyBiW1orYpLY4MvB6jgbvpSZU7CF3nR5-Jg',
  authDomain: 'portugal-75fa6.firebaseapp.com',
  databaseURL: 'https://portugal-75fa6.firebaseio.com',
  projectId: 'portugal-75fa6',
  storageBucket: '',
  messagingSenderId: '924693517890',
  appId: '1:924693517890:web:3b0a44e57b82f7c8'
}

firebase.initializeApp(config)
