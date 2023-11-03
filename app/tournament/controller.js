const { Router } = require('express')
const router = Router()
const Service = require('./service')
router.get('/tournament', async (req, res) => {
	const response = await Service.insert({
		userID: '123212343d',
		date: new Date().toISOString().replace('T', ' ').slice(0, 19)
	})
	res.status(200).json(response)
})
module.exports = router
