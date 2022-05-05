const boom = require('@hapi/boom');
const { adminAuth } = require('../libs/firebaseAdmin.js');

async function verifyToken(req, res, next) {
  try {
  
    if(!req.headers.authorization) throw boom.unauthorized("user unautorized")
    const idToken = req.headers.authorization.split(' ')[1];
    
    const decodedToken = await adminAuth
      .getAuth()
      .verifyIdToken(idToken);
    
    req.userRole = decodedToken.role;
    next();
  } catch (error) {
    console.log(error);
    next(boom.unauthorized(error.code));
  }
}

function checkRoles(...roles){
  const userRoles=["admin","customer"]
  return (req,res,next)=>{
    if (!userRoles.includes(req.userRole)) {
      throw boom.unauthorized('user unautorized');
    }
    next()
  }
}
module.exports = { verifyToken, checkRoles};
