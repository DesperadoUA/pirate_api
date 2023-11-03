const { Router } = require('express')
const router = Router()
const Service = require('./service')
router.post('/tournament', async (req, res) => {
	if (req.body.action === 'visit') {
		await Service.insertVisit({
			userID: req.body.id,
			date: new Date().toISOString().replace('T', ' ').slice(0, 19)
		})
	} else if (req.body.action === 'click') {
		await Service.insertAction({
			userID: req.body.id,
			date: new Date().toISOString().replace('T', ' ').slice(0, 19)
		})
	}
	res.status(200).json({ status: 'ok' })
})
module.exports = router
