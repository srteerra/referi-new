const express = require('express');
const boom = require('@hapi/boom');
const router = express.Router();
const UsersServices = require('../services/users.services');
const {
  verifyToken,
  checkRoles,
} = require('../middlewares/auth.handler');

const services = new UsersServices();

router.get('/', verifyToken,checkRoles("admin"), async (req, res, next) => {
  try {
    const { count, pageToken } = req.query;

    const users = await services.find(parseInt(count), pageToken);
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
});
router.get('/:uid', verifyToken, checkRoles("admin","customer"), async (req, res, next) => {
  try {
    
    const { uid } = req.params;
    const user = await services.findOne(uid);
    res.status(200).json({ user });
  } catch (error) {
    next(error);
  }
});
router.post('/',verifyToken,checkRoles("admin"), async (req, res, next) => {
  try {
    const datas = req.body;
    const user = await services.create(datas);
    res.status(201).json({ user });
  } catch (error) {
    next(error);
  }
});
router.put('/:uid', verifyToken,checkRoles("admin"),  async (req, res, next) => {
  try {
    const { uid } = req.params;
    const datas = req.body;
    const user = await services.update(uid, datas);
    res.status(200).json({ user });
  } catch (error) {
    next(boom.conflict(error.code));
  }
});
router.delete('/', verifyToken,checkRoles("admin"), async (req, res, next) => {
  try {
    const { uids } = req.body;

    res.status(200).send(await services.deletes(uids));
  } catch (error) {
    next(error);
  }
});
router.delete('/:uid', verifyToken,checkRoles("admin"),  async (req, res, next) => {
  try {
    const { uid } = req.params;

    res.status(200).send(await services.delete(uid));
  } catch (error) {
    next(error);
  }
});

//TOURNAMENTS
router.post('/registertournament/:id',verifyToken,async(req,res,next)=>{
  try {
    var {id}= req.params
    var {datas}=req.body
    res.status(200).json(await services.registerTournament(id,datas))
  } catch (error) {
    next(error)
  }
})

module.exports = router;
