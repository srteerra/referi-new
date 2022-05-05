const boom = require('@hapi/boom');
const { adminAuth, firestore } = require('../libs/firebaseAdmin');

const {sendMail} = require("../libs/nodemailer")

//GAMES APIS
const ClashRoyal = require('../services/Apis/clashRoyal.services');
const crServices = new ClashRoyal();
class userService {
  constructor() {}
  async find(count, pageToken) {
    try {
      const users = adminAuth.getAuth().listUsers(count, pageToken);

      return users;
    } catch (error) {
      throw error;
    }
  }
  async findOne(uid) {
    try {
      const userCredentials = await adminAuth.getAuth().getUser(uid);

      return userCredentials;
    } catch (error) {
      throw error;
    }
  }
  async create(datas) {
    try {
      const userCredentials = await adminAuth.getAuth().createUser({
        ...datas,
        emailVerified: false,
        disabled: false,
      });
      await adminAuth
        .getAuth()
        .setCustomUserClaims(userCredentials.uid, { role: datas.role });

      return userCredentials;
    } catch (error) {
      throw error;
    }
  }
  async update(uid, datas) {
    try {
      const userCredentials = await adminAuth.getAuth().updateUser(uid, datas);
      const user = await adminAuth
        .getAuth()
        .setCustomUserClaims(uid, { role: datas.role });
      return { ...userCredentials, role: datas.role };
    } catch (error) {
      throw error;
    }
  }
  async delete(uid) {
    try {
      const userCredentials = await adminAuth.getAuth().deleteUser(uid);
      return 'user deleted';
    } catch (error) {
      throw error;
    }
  }
  async deletes(uids) {
    try {
      await adminAuth.getAuth().deleteUsers(uids);
      return 'users deleted';
    } catch (error) {
      throw error;
    }
  }
  //TOURNAMENT
  async registerTournament(id, datas) {
    try {
      const comp = await firestore.collection('tournaments').doc(id).get();
      if (!comp.data()) {
        throw boom.notFound('tournament not found');
      }
      //validations
      //is regiter existed in tournament
      var participantsList = comp.data().participants;
      var findParticipant = participantsList.find((p) => {
        return p.userId == datas.userId;
      });
      if (findParticipant) {
        throw boom.conflict('user is registered');
      }
      //is acount game exist
      var player = await crServices.findPlayer(datas.gameId);
      if (!player) {
        throw boom.notFound('id not found');
      }
   
      //prepare datas
      var participants = {
        userId: datas.userId,
        gameId: datas.gameId,
        status: 'register not comfirmated',
        setimeout: new Date(),
      };
      participantsList.push(participants);

      var newDatas = comp.data();
      newDatas.participants = participantsList;
       
      //upload datas
      let response = await firestore
        .collection('tournaments')
        .doc(id)
        .update(newDatas); /**/
      //send email
      sendMail({
        from: 'referigames@gmail.com', // sender address
        to: 'jairoquinterodev@gmail.com', // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Hello world?', // plain text body
        html: '<b>Bienvenido al torneo de clash roya col 4.0</b>', // html body
      })
      return newDatas;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = userService;
