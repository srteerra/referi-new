const router = require('express').Router();
const ClashRoyal = require('../../services/Apis/clashRoyal.services');
const services = new ClashRoyal();
router.get('/players/:tag', async (req, res, next) => {
  try {
    const { tag } = req.params;

    var player = await services.findPlayer(tag);

    res.json({ datas: player });
  } catch (error) {
    next(error);
  }
});
router.get('/tournaments/:tag', async (req, res, next) => {
  try {
    const { tag } = req.params;

    var tournament = await services.findTournament(tag);

    res.json({ datas: tournament });
  } catch (error) {
    next(error);
  }
});
module.exports = router;
