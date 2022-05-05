const router = require('express').Router()
const Tournaments = require('../services/tournaments.services')
const services = new Tournaments()

router.get("/",async(req,res,next)=>{
    try {
        const tournaments = await services.find()
        res.status(200).json(tournaments)
    } catch (error) {
        next(error)
    }
})
router.get("/:id",async(req,res,next)=>{
    try {
        const {id} = req.params
        const tournament = await services.findOne(id)
        res.status(200).json(tournament)
    } catch (error) {
        next(error)
    }
})
module.exports = router