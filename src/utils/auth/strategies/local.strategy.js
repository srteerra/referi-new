
//const { adminAuth } = require('../../../libs/firebaseAdmin');
const { Auth } = require('../../../libs/firebase');
const {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signOut,
} = Auth;

const boom = require('@hapi/boom');

const signIn = async (email, password) => {
  try {
    const auth = getAuth();
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    user = userCredential.user;
    console.log(userCredential);
    return user;
  } catch (error) {
    switch (error.code) {
      case 'auth/user-not-found':
        throw boom.notFound('User Not Found');
      case 'auth/wrong-password':
        throw boom.conflict('password invalidate');
      case 'auth/missing-email':
        throw boom.conflict('missing email');
      default:
        throw error;
    }
  }
};
const register = async (email, password) => {
  try {
    const auth = getAuth();

    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    //user = userCredential.user
    //consol.log(userCredential.user);

    return 'ok';
  } catch (error) {
    switch (error.code) {
      case 'auth/email-already-in-use':
        throw boom.conflict('email already');
      default:
        throw error;
    }
  }
};
const logout = async (uid) => {
 
  return 'ok';
};

module.exports = { signIn, register, logout };
