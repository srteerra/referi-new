var firebase = require('firebase/app');
const Auth = require('firebase/auth');

const firebaseConfig = {
  apiKey: 'AIzaSyCi3dQ_fSo0CBvqRBLjvlDlbcsWCGFaBaE',
  authDomain: 'referigames-146eb.firebaseapp.com',
  databaseURL: 'https://referigames-146eb-default-rtdb.firebaseio.com',
  projectId: 'referigames-146eb',
  storageBucket: 'referigames-146eb.appspot.com',
  messagingSenderId: '799281104085',
  appId: '1:799281104085:web:e8437ba1484263eb7a0e5c',
  measurementId: 'G-XPGY7EZL6B',
};

(async () => {
  await firebase.initializeApp(firebaseConfig);
})();

module.exports = { firebase,Auth };
