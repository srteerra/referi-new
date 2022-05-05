const express  = require("express")

const usersRouters = require("./users.router")
const authRouters = require('./auth.router')
const tournamentsRouters =  require("./tournaments.router")
//EXTERNAL APIS
const clashRoyalRouters =  require("./Apis/clashRoyal.router")
function routerApi(app) {
    const router = express.Router();
    
    app.use('/api/v1', router);
    router.use('/',authRouters)
    router.use('/users', usersRouters);
    router.use('/tournaments',tournamentsRouters)
    //EXTERNAL APIS
    router.use('/clashroyal',clashRoyalRouters)

  }
  
  module.exports = routerApi;