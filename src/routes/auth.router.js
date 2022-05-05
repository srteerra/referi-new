const router = require('express').Router();
const auth = require('../utils/auth/index');

router.post('/login', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user=await auth.localStrategy.signIn(email,password);
    res.status(200).send("success")
  } catch (error) {
    next(error);
  }
});
router.post('/register', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    
    const user=await auth.localStrategy.register(email,password);
    res.status(200).send(user)
  } catch (error) {
    next(error);
  }
});
router.post('/logout', async (req, res, next) => {
  try {
    const {uid} = req.body;
    const user=await auth.localStrategy.logout(uid);
    res.status(200).send(user)
  } catch (error) {
    next(error);
  }
});

module.exports = router;
