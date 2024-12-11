// firebaseConfig.js

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAN0VTXfY575A6Hr-K225hEuCFAK1U9Tbs',
  authDomain: 'clearmind-442ad.firebaseapp.com',
  databaseURL: 'https://clearmind-442ad-default-rtdb.firebaseio.com',
  projectId: 'clearmind-442ad',
  storageBucket: 'clearmind-442ad.appspot.com',
  // messagingSenderId: 'YOUR_SENDER_ID',
  // appId: 'YOUR_APP_ID',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Export the database for use in other files
export { database };
