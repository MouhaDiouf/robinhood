import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCQ1Tnef6wviBGCvHkrQ8780QDOGL0xOLY',
  authDomain: 'robinhood-583dc.firebaseapp.com',
  projectId: 'robinhood-583dc',
  storageBucket: 'robinhood-583dc.appspot.com',
  messagingSenderId: '339807816741',
  appId: '1:339807816741:web:6077c1778f6bc1167603cc',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export { db };
