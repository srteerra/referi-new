const axios = require('axios');
const token = process.env.CLASHROYAL_API_TOKEN;
const URLAPI = process.env.CLASHROYAL_API_URL;
const CRApi = require('wrap-royale-core').CRApi;
const api = new CRApi(URLAPI, token);

class ClashRoyal {
  constructor() {}
  async findPlayer(tag) {
    try {
      //u2g88v99p
      var playerInfo = await api.playerProfile(tag);

      return playerInfo;
    } catch (error) {
      throw error;
    }
  }
  async findTournament(tag) {
    try {
      //u2g88v99p
      var tournament = await api.tournamentByTag(tag);

      return tournament;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ClashRoyal;
