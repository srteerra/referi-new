
var admin = require("firebase-admin");
var adminAuth = require("firebase-admin/auth");
var serviceAccount = require(process.env.GOOGLE_APPLICATION_CREDENTIALS);
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
(async ()=>{
  await admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://referigames-146eb-default-rtdb.firebaseio.com"
  });

})()

const firestore = getFirestore();

module.exports = {admin,adminAuth,firestore}