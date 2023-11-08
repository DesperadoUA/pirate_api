const { Router } = require('express')
const router = Router()
const DateTime = require('../../helpers/dateTime')
router.get('/casinos', async (req, res) => {
	const result = {
		status: 'ok',
		body: {
			date: DateTime.currentDate(),
			page: 'casinos'
		}
	}
	res.status(200).json({ status: result })
})
module.exports = router
