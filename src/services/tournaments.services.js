const { firestore } = require('../libs/firebaseAdmin');
class Tournaments {
  constructor() {}
  async find() {
    try {
      const query = await firestore.collection('tournaments');
      const querySnapshot = await query.get();
      const docs = querySnapshot.docs;
      if (!docs) {
        throw boom.notFound('empty tournaments');
      }
      const datas = docs.map((doc) => ({
        id: doc.id,
        datas: doc.data(),
      }));
      const tournaments = datas.map((t) => {
        if (t.datas.rooms) {
          let rooms = t.datas.rooms.map((room) => {
            delete room.password;
            return room;
          });
          t.datas.rooms = rooms;
        }
        return t;
      });

      return tournaments;
    } catch (error) {
      throw error;
    }
  }
  async findOne(id) {
    try {
      const query = await firestore.collection('tournaments').doc(id).get();
      const tournament = query.data();
      if (!tournament) {
        throw boom.notFound('tournament not found');
      }
      tournament.rooms.map((room) => {
        delete room.password;
        return room;
      });
      return tournament
     
    } catch (error) {
      throw error;
    }
  }
}
module.exports = Tournaments;
