const { Router } = require('express')
const router = Router()
const Service = require('./service')
const DateTime = require('../../helpers/dateTime')
router.post('/tournament/visit', async (req, res) => {
	const result = await Service.insertVisit({
		userID: req.body.id,
		date: DateTime.currentDate()
	})
	res.status(200).json({ status: result })
})
router.post('/tournament/click', async (req, res) => {
	const result = await Service.insertVisit({
		userID: req.body.id,
		date: DateTime.currentDate()
	})
	res.status(200).json({ status: result })
})
module.exports = router
